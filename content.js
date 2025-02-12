// content.js
function hideFactCheckBox() {
	let factCheckBox = document.getElementById('clarify-box');
	if (factCheckBox) {
		factCheckBox.style.display = 'none';
	}
}

// Try to hide the fact check box immediately
hideFactCheckBox();

// Use MutationObserver to handle dynamically loaded content
const observer = new MutationObserver(hideFactCheckBox);
observer.observe(document.body, { childList: true, subtree: true });

// Use window.onload to ensure the script runs after all resources have loaded
window.onload = function () {
	hideFactCheckBox();
	observer.observe(document.body, { childList: true, subtree: true });
};
