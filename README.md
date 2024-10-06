# Replace and Redirect

This Chrome extension allows you to automatically redirect to specified URLs based on predefined string matches. Whenever a match is found, the extension will replace the current URL and redirect you to the desired destination.

## How to Install the Chrome Extension in Developer Mode
Note: In the section 5 below, select the `src` folder where manifest file is.

1. Download the extension folder to your computer.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** by toggling the switch in the top right corner.
4. Click on the **Load unpacked** button.
5. Browse to the downloaded extension folder, select it, and click **Open**.
6. The extension will now be installed in Developer mode.

For more information on using Chrome extensions in Developer mode, you can visit the [Google Chrome Enterprise Help page](https://support.google.com/chrome/a/answer/2714278?hl=en).

## Set up

Access the options page of the extension

1. Enable the extension
2. Configure redirection
Enter redirection rules in the textarea. Each rule should be on a new line in the format: `redirect.from,redirect.to`

Example:
```
redirect1.from,redirect1.to
redirect2.from,redirect2.to
```

### Important Notes:

- Avoid Spaces: Do not include spaces in your URLs or parameters.
- Keyword Caution: Avoid using overly short or common words as they may unintentionally trigger redirections.
- Prevent Loops: Ensure that your redirections do not create infinite loops.

3. Save your settings.
