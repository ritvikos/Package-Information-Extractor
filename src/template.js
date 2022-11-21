document.addEventListener("DOMContentLoaded", () => {
    // Get Data from Local Storage and Render it on the Template.html
    chrome.storage.sync.get(['stored_response'], (result) => {
        document.getElementById("package-title").innerHTML = result.stored_response.title;
        document.getElementById("package-description").innerHTML = result.stored_response.description;
    });
});
export {};
