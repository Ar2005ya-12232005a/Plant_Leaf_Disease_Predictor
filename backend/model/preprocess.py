from tensorflow.keras.preprocessing import image
import numpy as np

def preprocess_image(img_path):
    img = image.load_img(img_path, target_size=(128, 128))  # ✅ FIXED (was 224)
    img_array = image.img_to_array(img)
    
    img_array = img_array / 255.0  # normalize (same as training)
    img_array = np.expand_dims(img_array, axis=0)  # shape: (1, 128, 128, 3)
    
    return img_array