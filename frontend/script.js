let chartInstance = null;

async function uploadImage() {
  const input = document.getElementById("imageInput");
  const file = input.files[0];
  const resultDiv = document.getElementById("result");

  // ❌ No file selected
  if (!file) {
    resultDiv.innerHTML = `<p style="color:red;">Please select an image first!</p>`;
    return;
  }

  const formData = new FormData();
  formData.append("image", file);

  // 🔄 Show loader
  resultDiv.innerHTML = `<div class="loader"></div>`;

  // 🖼 Preview image
  document.getElementById("preview").innerHTML =
    `<img src="${URL.createObjectURL(file)}"/>`;

  try {
    const res = await fetch("http://localhost:5000/api/predict/", {
      method: "POST",
      body: formData
    });

    // ❌ Handle server error properly
    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || "Server error");
    }

    const data = await res.json();

    // 🎯 Safety check
    if (!data || !data.confidence) {
      throw new Error("Invalid response from server");
    }

    const severityClass = data.severity.toLowerCase();

    // ✅ Show full result (improved UI)
    resultDiv.innerHTML = `
      <h3>${data.disease}</h3>
      <h4 class="${severityClass}">Severity: ${data.severity}</h4>
      <p>Confidence: ${(data.confidence * 100).toFixed(2)}%</p>
    `;

    drawChart(data.confidence);

  } catch (error) {
    console.error(error);
    resultDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}

function drawChart(confidence) {
  const ctx = document.getElementById("chart").getContext("2d");

  // Destroy old chart
  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Confidence"],
      datasets: [{
        label: "Prediction %",
        data: [confidence * 100]
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}




// let chartInstance = null;

// async function uploadImage() {
//   const input = document.getElementById("imageInput");
//   const file = input.files[0];
//   const resultDiv = document.getElementById("result");

//   if (!file) {
//     resultDiv.innerHTML = `<p style="color:red;">Please select an image!</p>`;
//     return;
//   }

//   // Preview image
//   document.getElementById("preview").innerHTML =
//     `<img src="${URL.createObjectURL(file)}"/>`;

//   // Show loader
//   resultDiv.innerHTML = `<div class="loader"></div>`;

//   // ⏳ Fake delay (like API call)
//   await new Promise(resolve => setTimeout(resolve, 1500));

//   // 🎯 Fake response (mock data)
//   const data = {
//     severity: "High",
//     confidence: 0.87
//   };

//   const severityClass = data.severity.toLowerCase();

//   resultDiv.innerHTML = `
//     <h3 class="${severityClass}">Severity: ${data.severity}</h3>
//     <p>Confidence: ${(data.confidence * 100).toFixed(2)}%</p>
//   `;

//   drawChart(data.confidence);
// }