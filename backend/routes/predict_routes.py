from flask import Blueprint, request, jsonify
import os
from model.predict import predict
from utils.severity import get_severity

predict_bp = Blueprint("predict", __name__)

@predict_bp.route("/", methods=["POST"])
def predict_disease():
    if "image" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["image"]

    # Save file
    filepath = os.path.join("uploads", file.filename)
    file.save(filepath)

    # Predict
    result = predict(filepath)

    severity = get_severity(result["confidence"])

    return jsonify({
        "disease": result["disease"],
        "confidence": result["confidence"],
        "severity": severity,
        "all_predictions": result["all_predictions"]
    })