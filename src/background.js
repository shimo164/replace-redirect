chrome.tabs.onUpdated.addListener(function(tabId, tab) {
	// Check if the URL of the tab has been updated
	if (tab.url) {
			// Get the enable state and redirect rules
			chrome.storage.local.get(['extensionEnabled', 'redirectRules'], function(result) {
					// Proceed only if the extension is enabled
					if (result.extensionEnabled !== false && result.redirectRules) {
							const rulesText = result.redirectRules;
							const rulesArray = rulesText.split('\n').map(line => line.trim()).filter(line => line);

							for (let i = 0; i < rulesArray.length; i++) {
									const rule = rulesArray[i];
									const [matchPart, newPart] = rule.split(',');
									if (matchPart && newPart) {
											// Check if the URL contains the matchPart
											if (tab.url.includes(matchPart)) {
													// Replace the matchPart with newPart
													const newUrl = tab.url.replace(matchPart, newPart);
													// Update the tab with the new URL
													chrome.tabs.update(tabId, {url: newUrl});
													break; // Stop after the first match
											}
									}
							}
					}
			});
	}
});
