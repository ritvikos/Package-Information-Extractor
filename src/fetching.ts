import deserialize from './deserialize.js';

interface ISource {
    source_type: string;
    module_input: string;
}

class Source implements ISource {
    url!: string;
    source_type: string;
    module_input: string;

    constructor(module_input: string, source_type: string) {
        this.module_input = module_input;
        this.source_type = source_type;
    }

    // Fetch Module's Data from End-points based on the Language
    async fetch_data(): Promise<void> {

        if (this.source_type === "javascript") this.url = `https://registry.npmjs.org/${this.module_input}`;
        if (this.source_type === "python") this.url = `https:/pypi.org/pypi/${this.module_input}/json`
        if (this.source_type === "rust") this.url = `https://crates.io/api/v1/crates/${this.module_input}`

        await fetch(this.url)
            .then((response: Response) => response.json())
            .then((data) => {
                deserialize(data, this.source_type);
                window.location.href = "../src/template.html";
            });
    }
}

export default Source;
