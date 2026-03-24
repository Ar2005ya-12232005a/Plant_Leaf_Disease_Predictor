import tensorflow as tf
import json
import numpy as np
from model.preprocess import preprocess_image

# Load model
model = tf.keras.models.load_model("model/plant_disease_model.h5")

# Load class names
with open("model/class_names.json") as f:
    class_names = json.load(f)

# 🔧 Clean label names
def format_disease_name(name):
    return name.replace("_", " ").replace("  ", " ")

def predict(image_path):
    img = preprocess_image(image_path)
    preds = model.predict(img)[0]

    # 🔝 Top 3 predictions
    top_indices = preds.argsort()[-3:][::-1]

    top_predictions = []
    for i in top_indices:
        top_predictions.append({
            "disease": format_disease_name(class_names[i]),
            "confidence": float(preds[i])
        })

    return {
        "disease": top_predictions[0]["disease"],
        "confidence": top_predictions[0]["confidence"],
        "top_predictions": top_predictions,
        "all_predictions": preds.tolist()
    }