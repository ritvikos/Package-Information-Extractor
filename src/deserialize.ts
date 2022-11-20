import { set_browser_storage } from "./utils.js";

const deserialize = (data: any, source_type: string): void => {

    // Python
    if (source_type === "py") {
        const title: string = data.info.name;
        const description: string = data.info.description;
        set_browser_storage(title, description);
    }

    // JavaScript
    if (source_type === "js") {
        const title: string = data.name;
        const description: string = data.description;
        set_browser_storage(title, description);
    }

    // Rust
    if (source_type === "rs") {
        const title: string = data.crate.name;
        const description: string = data.crate.description;
        set_browser_storage(title, description);
    }
}

export default deserialize;
