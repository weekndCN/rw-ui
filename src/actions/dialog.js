// showAddJobDialog .
export const showAddJobDialog = async(context) => {
    context.commit("DAILOG_SHOW_ADDJOB");
}

// closeAddJobDialog .
export const closeAddJobDialog = async(context) => {
    context.commit("DAILOG_CLOSE_ADDJOB");
}
