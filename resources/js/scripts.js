const price_output = document.getElementById("price-output");
const slider_input = document.getElementById("slider-input");

price_output.innerHTML = slider_input.value;

// Update price value dynamically using slider input:
slider_input.addEventListener("input", () => {
	price_output.textContent = slider_input.value;
});
