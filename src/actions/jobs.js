import { headers, instance } from "./config"



export const JOBS_FETCH_LOADING = "JOBS_FETCH_LOADING";
export const JOBS_FETCH_SUCCESS = "JOBS_FETCH_SUCCESS";
export const JOBS_FETCH_FAILURE = "JOBS_FETCH_FAILURE";
// fetchJobs return jobs with limit
export const fetchJobs = async (store) => {
    store.commit(JOBS_FETCH_LOADING);

    const req = await fetch(`${instance}/list`, {
        headers,
        method: "GET",
    });

    const res = await req.json();
    if (req.status < 300) {
        store.commit(JOBS_FETCH_SUCCESS, { res });
    } else {
        store.commit(JOBS_FETCH_FAILURE, { res });
    }
}


