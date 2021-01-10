import { instance, headers } from './config.js'

export const BGIMG_FETCH_LOADING = "BGIMG_FETCH_LOADING";
export const BGIMG_FETCH_SUCCESS = "BGIMG_FETCH_SUCCESS";
export const BGIMG_FETCH_FAILURE = "BGIMG_FETCH_FAILURE";

/*
* fetch background images
*/

export const fetchBgImg = async context => {
    context.commit(BGIMG_FETCH_LOADING);

    // request generate
    const req = await fetch(`${instance}/api/bgimgs`, {
        headers,
        credentials: "same-origin",
    });

    // result
    console.log(req)
    const res = await req.json();

    if (req.status > 299) {
        context.commit(BGIMG_FETCH_FAILURE, { error: res });
    } else {
        context.commit(BGIMG_FETCH_SUCCESS,{res});
    }
}