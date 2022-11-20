// Shorthand to store title and description in the Local Storage
const set_browser_storage = (title, description) => {
    chrome.storage.sync.set({
        stored_response: {
            title: title,
            description: description,
        }
    });
};
export { set_browser_storage };
