import { instance, headers } from "./config"

// Add job section
export const UPLOAD_FILES_LOADING = "UPLOAD_FILES_LOADING";
export const UPLOAD_FILES_SUCCESS = "UPLOAD_FILES_SUCCESS";
export const UPLOAD_FILES_FAILURE = "UPLOAD_FILES_FAILURE";

export const uploadFiles = async (store, params) => {
    store.commit(UPLOAD_FILES_LOADING);
    const req = await fetch(`${instance}/file/upload`, {
        headers,
        method: "POST",
        body: params,
        mode: 'cors',
    })
        .catch(
            error => console.error('Error:', error)
        );

    if (req.status < 300) {
        store.commit(UPLOAD_FILES_SUCCESS);
    } else {
        store.commit(UPLOAD_FILES_FAILURE);
    }
} 