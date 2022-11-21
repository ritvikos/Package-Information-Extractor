import { set_browser_storage } from './utils.js';
// Convert from JSON to string and set browser storage
const deserialize = (data, source_type) => {
    // Python
    if (source_type === "python") {
        const title = data.info.name;
        const description = data.info.description;
        set_browser_storage(title, description);
    }
    // JavaScript
    if (source_type === "javascript") {
        const title = data.name;
        const description = data.description;
        set_browser_storage(title, description);
    }
    // Rust
    if (source_type === "rust") {
        const title = data.crate.name;
        const description = data.crate.description;
        set_browser_storage(title, description);
    }
};
export default deserialize;
