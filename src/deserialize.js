import { set_browser_storage } from "./utils.js";
const deserialize = (data, source_type) => {
    // Python
    if (source_type === "py") {
        const title = data.info.name;
        const description = data.info.description;
        set_browser_storage(title, description);
    }
    // JavaScript
    if (source_type === "js") {
        const title = data.name;
        const description = data.description;
        set_browser_storage(title, description);
    }
    // Rust
    if (source_type === "rs") {
        const title = data.crate.name;
        const description = data.crate.description;
        set_browser_storage(title, description);
    }
};
export default deserialize;
