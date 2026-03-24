from flask import Flask
from flask_cors import CORS
from routes.predict_routes import predict_bp
import os

app = Flask(__name__)
CORS(app)

app.register_blueprint(predict_bp, url_prefix="/api/predict")

@app.route("/")
def home():
    return "Plant Disease API is running "

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)