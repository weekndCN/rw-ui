import Vue from 'vue'
import Vuex from 'vuex'
import * as config from "@/actions/config"
import * as actions from '@/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // instance store
    instance: {
      // if not set config instance then return window ref
      url: config.instance || `${window.location.protocol}//${window.location.host}`
    },
    // jobs store
    jobs: {},
    // background image
    bgimage: {},
    // add job dialog
    addjobdialog: false,
    // snackbar message
    snack: {
      show: false,
      timeout: 2000,
      postion: 'top',
      color: 'success',
      text: '',
    },
    loading: false,
  },
  // mutations update store values
  mutations: {
    /*
    * fetch jobs
    */
    JOBS_FETCH_LOADING(state) {
    },
    JOBS_FETCH_FAILURE(state, { error }) {
    },
    JOBS_FETCH_SUCCESS(state, { res }) {
      console.log("res:",res)
      state.jobs = res;
    },
    /*
    * fetch background images
    */
    BGIMG_FETCH_LOADING(state) {
      console.log("loading")
    },
    BGIMG_FETCH_FAILURE(state, { error }) {
      console.log("failure")
    },
    BGIMG_FETCH_SUCCESS(state, { res }) {
      console.log("success")
    },
    DAILOG_SHOW_ADDJOB(state) {
      state.addjobdialog = true
    },
    DAILOG_CLOSE_ADDJOB(state) {
      state.addjobdialog = false
    },
    // job curd operations
    JOB_ADD_LOADING(state) { },
    JOB_ADD_SUCCESS(state) {
      state.snack.show = true
      state.snack.text = "添加任务成功"
      state.snack.color = "success"
    },
    JOB_ADD_FAILURE(state) { },
    JOB_DELETE_LOADING(state) { },
    JOB_UPDATE_LOADING(state) { },
    JOB_SELECT_LOADING(state) { },

    UPLOAD_FILES_LOADING(state) {
      state.loading = true
    },
    UPLOAD_FILES_SUCCESS(state){
      console.log("receive")
      state.loading = false
      state.snack.show = true
      state.snack.text = "上传成功"
      state.snack.color = "success"
    },
    UPLOAD_FILES_FAILURE(state){
      state.loading = false
      state.snack.show = true
      state.snack.text = "上传失败"
      state.snack.color = "error"
    },
  },
  actions,
  modules: {
  }
})
