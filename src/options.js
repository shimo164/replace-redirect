document.addEventListener('DOMContentLoaded', function () {
	const textarea = document.getElementById('redirectRules');
	const saveButton = document.getElementById('saveButton');
	const extensionToggle = document.getElementById('extensionToggle');

	// Load saved rules and enable state
	chrome.storage.local.get(['redirectRules', 'extensionEnabled'], function(result) {
			if (result.redirectRules) {
					textarea.value = result.redirectRules;
			}
			// Set the toggle state; default is enabled (true)
			extensionToggle.checked = result.extensionEnabled !== false;
	});

	// Save rules and enable state
	saveButton.addEventListener('click', function() {
			const rulesText = textarea.value;
			const extensionEnabled = extensionToggle.checked;

			chrome.storage.local.set({
					redirectRules: rulesText,
					extensionEnabled: extensionEnabled
			}, function() {
					alert('Settings saved.');
			});
	});

	// Optional: Update enable state immediately when the toggle is changed
	extensionToggle.addEventListener('change', function() {
			chrome.storage.local.set({ extensionEnabled: extensionToggle.checked });
	});
});
