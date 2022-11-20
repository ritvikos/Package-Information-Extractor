import Source from "./fetching.js";

const dropDown = document.getElementById("mde-language-dropdown") as HTMLSelectElement
const searchButton = document.getElementById("mde-module-search-button") as HTMLButtonElement;
const input = document.getElementById("mde-module-search-input") as HTMLInputElement;

try {
    searchButton.addEventListener("click", (e) => {

        e.preventDefault();
        const sanitized_input: string = dropDown.value;

        // Clear Storage Before Sending Request
        try {
            chrome.storage.sync.clear();
            chrome.storage.sync.remove("stored_response");
        } catch (error) {
            console.error("Couldn't clear storage");
        }

        // Fetch Data Based on The Language
        switch (sanitized_input) {
            case "javascript":
                new Source(input.value, "js").fetch_data(); break;

            case "python":
                new Source(input.value, "py").fetch_data(); break;

            case "rust":
                new Source(input.value, "rs").fetch_data(); break;

            default:
                break;
        }

    })
} catch (error) {
    console.error("Couldn't fetch data");
}

export { };

// Compile Command: tsc -t ES2022 main.ts
// Compile Command: tsc -t ES2022 template.ts
// EsLint:          npx eslint .
