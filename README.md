# 🌿 AI Plant Disease Detection System

An AI-powered web application that detects plant diseases from leaf images and predicts severity using a deep learning model.

---

## 🚀 Features

* 📷 Upload plant leaf images
* 🤖 Deep learning-based disease prediction
* 📊 Confidence score visualization (Chart.js)
* ⚠️ Severity classification (Low / Medium / High)
* 🧠 Top predictions (multi-class output)
* 🎨 Clean and responsive UI

---

## 🧠 Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* Chart.js

### Backend

* Python
* Flask
* Flask-CORS

### AI / ML

* TensorFlow / Keras
* Convolutional Neural Network (CNN)

---

## 📂 Project Structure

```
Plant_Village/
│
├── backend/
│   ├── app.py
│   ├── routes/
│   ├── model/
│   ├── utils/
│   ├── uploads/
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/plant-disease-app.git
cd plant-disease-app
```

---

### 2️⃣ Setup Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
```

```bash
pip install -r requirements.txt
```

---

### 3️⃣ Add Model File

Download the trained model and place it in:

```
backend/model/plant_disease_model.h5
```

---

### 4️⃣ Run Backend

```bash
python app.py
```

Server runs on:

```
http://127.0.0.1:5000
```

---

### 5️⃣ Run Frontend

```bash
cd frontend
python -m http.server 5500
```

Open:

```
http://localhost:5500
```

---

## 📊 How It Works

1. User uploads an image
2. Image is sent to Flask backend
3. Model processes image using CNN
4. Prediction + confidence is returned
5. Severity is calculated
6. Results are displayed with visualization

---

## ⚠️ Notes

* Model file (`.h5`) is not included due to size limits
* You must download and add it manually

---

## 🚀 Future Improvements

* 🌿 Disease cure suggestions
* 📱 Mobile responsive UI
* ☁️ Cloud deployment
* 🔥 Grad-CAM visualization
* 🧠 Improved model accuracy

---

## 👨‍💻 Author

Arya Sankar Ram TS

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
