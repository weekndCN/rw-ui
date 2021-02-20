import { instance,headers } from "./config"

// Regitser user
export const REGISTER_USER_LOADING = "REGISTER_USER_LOADING";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

// Login user
export const LOGIN_USER_LOADING = "LOGIN_USER_LOADING";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const registerUser = async (store, params) => {
    store.commit(REGISTER_USER_LOADING)
    const req = await fetch(`${instance}/register`, {
        //headers: new Headers({}),
        method: "POST",
        body: params,
    }) .catch (
        error => console.error("Error:", error)
    );

    if (req.status < 300) {
        store.commit(REGISTER_USER_SUCCESS);
    } else {
        store.commit(REGISTER_USER_FAILURE);
    }
}


export const loginUser = async (store, params) => {
    store.commit(LOGIN_USER_LOADING)
    const req = await fetch(`${instance}/login`, {
        //headers: new Headers({}),
        method: "POST",
        body: params,
    }) .catch (
        error => console.error("Error:", error)
    );

    if (req.status < 300) {
        store.commit(LOGIN_USER_SUCCESS);
    } else {
        store.commit(LOGIN_USER_FAILURE);
    }
}