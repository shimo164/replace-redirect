chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
	if (!changeInfo.url) return;

	try {
			const { extensionEnabled = true, redirectRules = '' } = await chrome.storage.local.get(['extensionEnabled', 'redirectRules']);

			if (!extensionEnabled || !redirectRules) return;

			const rulesArray = redirectRules
					.split('\n')
					.map(line => line.trim())
					.filter(Boolean);

			for (const rule of rulesArray) {
					const [matchPart, newPart] = rule.split(',').map(part => part.trim());

					if (matchPart && newPart && changeInfo.url.includes(matchPart)) {
							const newUrl = changeInfo.url.replace(matchPart, newPart);
							await chrome.tabs.update(tabId, { url: newUrl });
							break; // Stop after the first match
					}
			}
	} catch (error) {
			console.error('Error processing redirect rules:', error);
	}
});
