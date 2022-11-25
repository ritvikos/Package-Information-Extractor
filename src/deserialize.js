import { set_browser_storage } from './utils.js';
// Convert from JSON to string and set browser storage
const deserialize = (data, source_type) => {
    // Python
    if (source_type === "python") {
        const title = data.info.name;
        const description = data.info.description;
        const latest_version = data.info.version;
        set_browser_storage(title, description, source_type, latest_version);
    }
    // JavaScript
    if (source_type === "javascript") {
        const title = data.name;
        const description = data.description;
        const latest_version = data["dist-tags"].latest;
        set_browser_storage(title, description, source_type, latest_version);
    }
    // Rust
    if (source_type === "rust") {
        const title = data.crate.name;
        const description = data.crate.description;
        const latest_version = data.crate.max_stable_version;
        set_browser_storage(title, description, source_type, latest_version);
    }
};
export default deserialize;
