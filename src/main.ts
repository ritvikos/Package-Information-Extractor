import Source from './fetching.js';

const dropDown = document.getElementById("language-dropdown") as HTMLSelectElement
const searchButton = document.getElementById("package-search-button") as HTMLButtonElement;
const input = document.getElementById("package-search-input") as HTMLInputElement;

if (searchButton !== null) {
    searchButton.addEventListener("click", (e) => {
        e.preventDefault();
        const dropDown_value: string = dropDown.value;

        // Clear Storage Before Sending Request
        try {
            chrome.storage.sync.clear();
            chrome.storage.sync.remove("stored_response");
        } catch (error) {
            console.error("Couldn't clear storage");
        }

        // Fetch Data Based on The Language
        const processed_input = input.value.trim().toLowerCase();
        if (dropDown_value === "javascript" || dropDown_value === "python" || dropDown_value === "rust") {
            new Source(processed_input, dropDown_value).fetch_data();
        }
    })
}


export { };

// Compile Command: tsc -t ES2022 main.ts
// Compile Command: tsc -t ES2022 template.ts
// EsLint:          npx eslint .
