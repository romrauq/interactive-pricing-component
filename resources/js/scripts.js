const price_output = document.getElementById("price-output");
const price_output_mobile = document.getElementById("price-output-mobile");
const slider_input = document.getElementById("slider-input");
const toggle_button = document.getElementById("toggle-button");

let is_monthly = true;

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
