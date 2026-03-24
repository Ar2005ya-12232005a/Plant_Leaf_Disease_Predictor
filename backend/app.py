from flask import Flask
from flask_cors import CORS
from routes.predict_routes import predict_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(predict_bp, url_prefix="/api/predict")

if __name__ == "__main__":
    app.run(debug=True)