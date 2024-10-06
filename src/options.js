document.addEventListener('DOMContentLoaded', () => {
	const textarea = document.getElementById('redirectRules');
	const saveButton = document.getElementById('saveButton');
	const extensionToggle = document.getElementById('extensionToggle');

	// Load saved rules and enable state
	chrome.storage.local.get(['redirectRules', 'extensionEnabled'], ({ redirectRules = '', extensionEnabled = true }) => {
			textarea.value = redirectRules;
			extensionToggle.checked = extensionEnabled;
	});

	// Save rules and enable state
	saveButton.addEventListener('click', () => {
			const rulesText = textarea.value.trim();
			const extensionEnabled = extensionToggle.checked;

			chrome.storage.local.set({ redirectRules: rulesText, extensionEnabled }, () => {
					alert('Settings saved.');
			});
	});

	// Update enable state immediately when the toggle is changed
	extensionToggle.addEventListener('change', () => {
			chrome.storage.local.set({ extensionEnabled: extensionToggle.checked });
	});
});
