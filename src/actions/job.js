import { instance, headers } from './config.js'

// Add job section
export const JOB_ADD_LOADING = "JOB_ADD_LOADING";
export const JOB_ADD_SUCCESS = "JOB_ADD_SUCCESS";
export const JOB_ADD_FAILURE = "JOB_ADD_FAILURE";
// Delete job section
export const JOB_DELETE_LOADING = "JOB_DELETE_LOADING";
export const JOB_DELETE_SUCCESS = "JOB_DELETE_SUCCESS";
export const JOB_DELETE_FAILURE = "JOB_DELETE_FAILURE";
// update job section
export const JOB_UPDATE_LOADING = "JOB_UPDATE_LOADING";
export const JOB_UPDATE_SUCCESS = "JOB_UPDATE_SUCCESS";
export const JOB_UPDATE_FAILURE = "JOB_UPDATE_FAILURE";
// select a job
export const JOB_SELECT_LOADING = "JOB_SELECT_LOADING";
export const JOB_SELECT_SUCCESS = "JOB_SELECT_SUCCESS";
export const JOB_SELECT_FAILURE = "JOB_SELECT_FAILURE";


// add job action
export const addJob = async (store,params) => {
    store.commit(JOB_ADD_LOADING);
    console.log("params:", params)
    const req = await fetch(`${instance}/add`,{
        headers,
        method: "POST",
        body: JSON.stringify(params),
    });

    if (req.status < 300) {
        store.commit(JOB_ADD_SUCCESS);
    } else {
        store.commit(JOB_ADD_FAILURE);
    }
}

// delete job action
export const deleteJob = async ({ store, params }) => {

}

// update job action
export const updateJob = async ({ store, params }) => {

}

// select job action
export const selectJob = async ({ store, params }) => {

}

