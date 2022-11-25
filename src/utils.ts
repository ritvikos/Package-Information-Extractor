// Custom Helper Function to store title and description in the Local Storage
const set_browser_storage = (title: string, description: string, source_type: string, latest_version: string): void => {
    chrome.storage.sync.set({
        stored_response: {
            title: title,
            description: description,
            source_type: source_type,
            latest_version: latest_version
        }
    });
};

export { set_browser_storage };
