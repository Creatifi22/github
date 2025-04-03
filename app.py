from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, create_access_token
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///thumbnail_agency.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY', 'your-secret-key')

# Initialize extensions
db = SQLAlchemy(app)
jwt = JWTManager(app)

# Models
class Client(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    projects = db.relationship('Project', backref='client', lazy=True)

class Freelancer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    skills = db.Column(db.String(200))
    projects = db.relationship('Project', backref='freelancer', lazy=True)

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text)
    status = db.Column(db.String(50), default='pending')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    client_id = db.Column(db.Integer, db.ForeignKey('client.id'), nullable=False)
    freelancer_id = db.Column(db.Integer, db.ForeignKey('freelancer.id'))

# Routes
@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    try:
        new_client = Client(
            name=data['name'],
            email=data['email']
        )
        new_project = Project(
            title=data['project_title'],
            description=data['description'],
            client=new_client
        )
        
        db.session.add(new_client)
        db.session.add(new_project)
        db.session.commit()
        
        return jsonify({
            'message': 'Request received successfully',
            'project_id': new_project.id
        }), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/api/projects', methods=['GET'])
def get_projects():
    projects = Project.query.all()
    return jsonify([{
        'id': p.id,
        'title': p.title,
        'description': p.description,
        'status': p.status,
        'client_name': p.client.name,
        'freelancer_name': p.freelancer.name if p.freelancer else None
    } for p in projects])

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
