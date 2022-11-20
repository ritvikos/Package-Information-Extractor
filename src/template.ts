document.addEventListener("DOMContentLoaded", () => {

    // Get Data from Local Storage and Render the Data on the Template.html
    chrome.storage.sync.get(['stored_response'], (result) => {
        document.getElementById("module-title")!.innerHTML = result.stored_response.title;
        document.getElementById("module-description")!.innerHTML = result.stored_response.description;
    })
});

export {}
