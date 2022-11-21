import deserialize from './deserialize.js';
class Source {
    url;
    source_type;
    module_input;
    constructor(module_input, source_type) {
        this.module_input = module_input;
        this.source_type = source_type;
    }
    // Fetch Module's Data from End-points based on the Language
    async fetch_data() {
        if (this.source_type === "javascript")
            this.url = `https://registry.npmjs.org/${this.module_input}`;
        if (this.source_type === "python")
            this.url = `https:/pypi.org/pypi/${this.module_input}/json`;
        if (this.source_type === "rust")
            this.url = `https://crates.io/api/v1/crates/${this.module_input}`;
        await fetch(this.url)
            .then((response) => response.json())
            .then((data) => {
            deserialize(data, this.source_type);
            window.location.href = "../src/template.html";
        });
    }
}
export default Source;
