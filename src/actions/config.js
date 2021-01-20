// default authentication credentials.
export const headers = new Headers(
    process.env.RWPLUS_TOKEN ? { Authorization: `Bearer ${process.env.APP_JOB_HUB_TOKEN}` } : {}
);

// default server api token.
export const token = process.env.RWPLUS_TOKEN;

// default server address.
export const instance = process.env.RWPLUS_SERVER || "localhost:9090";

