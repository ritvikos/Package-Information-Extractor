document.addEventListener("DOMContentLoaded", (): void => {

    // Get Data from Local Storage and Render it on the Template.html
    chrome.storage.sync.get(['stored_response'], (result: { [key: string]: any }) => {
        const package_title = document.getElementById("package-title");
        const package_description = document.getElementById("package-description");

        if (package_title !== null && package_description !== null) {
            package_title.innerHTML = result.stored_response.title;
            package_description.innerHTML = result.stored_response.description;

            const package_install_cmd = document.getElementById("package-install-cmd");

            if (package_install_cmd !== null) {
                if (result.stored_response.source_type === "javascript") {
                    package_install_cmd.innerHTML = `npm i ${result.stored_response.title}`;
                }
                if (result.stored_response.source_type === "python") {
                    package_install_cmd.innerHTML = `pip install ${result.stored_response.title}`;
                }
                if (result.stored_response.source_type === "rust") {
                    package_install_cmd.innerHTML = `${result.stored_response.title} = "${result.stored_response.latest_version}"`;
                }
            }
        }
    })
});

const copy_cmd_text = document.getElementById("copy_cmd_text");
if (copy_cmd_text !== null) {
    copy_cmd_text.addEventListener("click", () => {
        navigator.clipboard.writeText(document.getElementById("package-install-cmd")!.innerHTML);
    });
}

export { }
