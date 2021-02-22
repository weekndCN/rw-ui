// default authentication credentials.
export const headers = new Headers(
    window.localStorage.getItem("token")? {Authorization: `Bearer ${window.localStorage.getItem("token")}`} : {}
);

// default server api token.
export const token = process.env.VUE_APP_RWPLUS_TOKEN;

// default server address.
export const instance = process.env.VUE_APP_RWPLUS_SERVER ? process.env.VUE_APP_RWPLUS_SERVER : "http://localhost:9090" 

