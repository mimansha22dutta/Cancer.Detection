// script.js

// Event listener for form submission
document.getElementById('cancerForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form from reloading the page

    // Get input values
    const clumpThickness = parseInt(document.getElementById('clump_thickness').value);
    const cellSize = parseInt(document.getElementById('uniformity_of_cell_size').value);
    const cellShape = parseInt(document.getElementById('uniformity_of_cell_shape').value);
    const adhesion = parseInt(document.getElementById('marginal_adhesion').value);

    // Simulate a simple prediction using rule-based logic
    const prediction = predictCancer(clumpThickness, cellSize, cellShape, adhesion);

    // Display the prediction result
    document.getElementById('predictionText').textContent = prediction;
});

// Function to predict cancer based on input features
function predictCancer(clumpThickness, cellSize, cellShape, adhesion) {
    // Simple decision tree (just an example, not accurate)
    if (clumpThickness > 5 && cellSize > 5 && cellShape > 5 && adhesion > 5) {
        return "Malignant (Cancerous) Tumor.";
    } else {
        return "Benign (Non-cancerous) Tumor.";
    }
}
