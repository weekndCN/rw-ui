import { instance } from "./config"

// Add job section
export const GET_TREE_LOADING = "GET_TREE_LOADING";
export const GET_TREE_SUCCESS = "GET_TREE_SUCCESS";
export const GET_TREE_FAILURE = "GET_TREE_FAILURE";

export const getTree = async (store, params) => {
    store.commit(GET_TREE_LOADING);
    const req = await fetch(`${instance}/tree`, {
        headers: new Headers({}),
        method: "get",
    }).catch(
        error => console.error('Error:', error)
    );

    const res = await req.json()

    if (req.status < 300) {
        store.commit(GET_TREE_SUCCESS, res);
    } else {
        store.commit(GET_TREE_FAILURE);
    }
} 