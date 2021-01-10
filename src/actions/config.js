// default authentication credentials.
export const headers = new Headers(
    process.env.APP_JOB_HUB_TOKEN ? { Authorization: `Bearer ${process.env.APP_JOB_HUB_TOKEN}` } : {}
);

// backend api server address
export const instance = "http://localhost:9090";