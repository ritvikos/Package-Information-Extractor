import { set_browser_storage } from './utils.js';

// Convert from JSON to string and set browser storage
const deserialize = (data: any, source_type: string): void => {

    // Python
    if (source_type === "python") {
        const title: string = data.info.name;
        const description: string = data.info.description;
        set_browser_storage(title, description);
    }

    // JavaScript
    if (source_type === "javascript") {
        const title: string = data.name;
        const description: string = data.description;
        set_browser_storage(title, description);
    }

    // Rust
    if (source_type === "rust") {
        const title: string = data.crate.name;
        const description: string = data.crate.description;
        set_browser_storage(title, description);
    }
}

export default deserialize;
