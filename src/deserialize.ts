import { set_browser_storage } from './utils.js';

// Convert from JSON to string and set browser storage
const deserialize = (data: any, source_type: string): void => {

    // Python
    if (source_type === "python") {
        const title: string = data.info.name;
        const description: string = data.info.description;
        const latest_version: string = data.info.version;
        set_browser_storage(title, description, source_type, latest_version);
    }

    // JavaScript
    if (source_type === "javascript") {
        const title: string = data.name;
        const description: string = data.description;
        const latest_version: string = data["dist-tags"].latest;
        set_browser_storage(title, description, source_type, latest_version);
    }

    // Rust
    if (source_type === "rust") {
        const title: string = data.crate.name;
        const description: string = data.crate.description;
        const latest_version: string = data.crate.max_stable_version;
        set_browser_storage(title, description, source_type, latest_version);
    }
}

export default deserialize;
