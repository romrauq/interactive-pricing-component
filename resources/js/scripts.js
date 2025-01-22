const price_output = document.getElementById("price-output");
const price_output_mobile = document.getElementById("price-output-mobile");
const slider_input = document.getElementById("slider-input");
const toggle_button = document.getElementById("toggle-button");

let is_monthly = true;

// Function to calculate the percentage of slider value relative to its range, and update the slider's background style accordingly:
function updateSliderBackground() {
	const min = Number(slider_input.min);
	const max = Number(slider_input.max);
	const value = Number(slider_input.value);

	// Calculate the percentage of the current value
	const percentage = ((value - min) / (max - min)) * 100;

	// Update the background to show the range
	slider_input.style.background = `linear-gradient(to right, hsl(174, 86%, 45%) ${percentage}%, hsl(223, 50%, 87%) ${percentage}%)`;
}

// Initialize the background on page load
updateSliderBackground();

// Update the background whenever the slider value changes
slider_input.addEventListener("input", updateSliderBackground);

// Initial price display
price_output.innerHTML = `${slider_input.value}`;
price_output_mobile.innerHTML = `${slider_input.value}`;

// Update price value dynamically using slider input
slider_input.addEventListener("input", () => {
	if (is_monthly) {
		price_output.innerHTML = `${slider_input.value}`;
		price_output_mobile.innerHTML = `${slider_input.value}`;
	} else {
		const discount_amount = Number(slider_input.value) * 0.25;
		const discounted_price = Number(slider_input.value) - discount_amount;
		price_output.innerHTML = `${discounted_price.toFixed(2)}`;
		price_output_mobile.innerHTML = `${discounted_price.toFixed(2)}`;
	}
});

// Toggle button click event
toggle_button.addEventListener("click", () => {
	if (is_monthly) {
		toggle_button.style.justifyContent = "flex-end";
		const discount_amount = Number(slider_input.value) * 0.25;
		const discounted_price = Number(slider_input.value) - discount_amount;
		price_output.innerHTML = `${discounted_price.toFixed(2)}`;
		price_output_mobile.innerHTML = `${discounted_price.toFixed(2)}`;
	} else {
		toggle_button.style.justifyContent = "flex-start";
		price_output_mobile.innerHTML = `${slider_input.value}`;
	}
	is_monthly = !is_monthly;
});
