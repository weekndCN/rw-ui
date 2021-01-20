import { instance } from "./config"

// Add job section
export const DOWNLOAD_FILES_LOADING = "DOWNLOAD_FILES_LOADING";
export const DOWNLOAD_FILES_SUCCESS = "DOWNLOAD_FILES_SUCCESS";
export const DOWNLOAD_FILES_FAILURE = "DOWNLOAD_FILES_FAILURE";

export const downloadFile = async (store, params) => {
    const { name, path } = params
    store.commit(DOWNLOAD_FILES_LOADING);
    const req = await fetch(`${instance}/upload/download/${path}`, {
        headers: new Headers({}),
        responseType: 'arraybuffer',
        method: "GET",
    })
        .catch(
            error => console.error('Error:', error)
        );
    const myBlob = await req.blob()
    var a = document.createElement("a");
    a.href = URL.createObjectURL(myBlob);
    a.setAttribute("download", name);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    if (req.status < 300) {
        store.commit(UPLOAD_FILES_SUCCESS);
    } else {
        store.commit(UPLOAD_FILES_FAILURE);
    }

} 