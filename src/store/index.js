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
    jobs: [],
    job: {},
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
    uploadStatus: {},
    tree: [],
    // app drawer
    drawer: false,
    //mini mode
    mini: true,
    // regitser user
    isLogin: true,
    registerRes: false,
    isAuthenticated: false,
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
      console.log("res:", res)
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
    JOB_ADD_FAILURE(state, res) {
      state.snack.show = true
      state.snack.text = res
      state.snack.color = "error"
    },

    JOB_DELETE_LOADING(state) { },
    JOB_UPDATE_LOADING(state) { },


    JOB_SELECT_LOADING(state) {
    },

    JOB_SELECT_SUCCESS(state, res) {
      state.job = res
    },
    JOB_SELECT_FAILURE(state, res) {
      state.snack.show = true
      state.snack.text = res
      state.snack.color = "error"
    },

    // upload files
    UPLOAD_FILES_LOADING(state, name) {
      state.uploadStatus = 'loading'
    },
    UPLOAD_FILES_SUCCESS(state, name) {
      /*
      */
      state.uploadStatus = 'success'

    },
    UPLOAD_FILES_FAILURE(state) {
      state.uploadStatus = 'failure'
      state.loading = false
      state.snack.show = true
      state.snack.text = "上传失败"
      state.snack.color = "error"
    },

    // file tree
    GET_TREE_LOADING(state) {
      state.loading = true
    },
    GET_TREE_SUCCESS(state, res) {
      state.tree = res
      state.loading = false
    },
    GET_TREE_FAILURE(state) {
      state.loading = false
      state.snack.show = true
      state.snack.text = "获取文件信息失败"
      state.snack.color = "error"
    },

    // download files
    DOWNLOAD_FILES_LOADING(state) {
    },
    DOWNLOAD_FILES_SUCCESS(state) {
    },
    DOWNLOAD_FILES_FAILURE(state) {
    },
    // app drawer show
    MINI_SHOW(state) {
      state.mini = !state.mini
    },

    // register user
    REGISTER_USER_LOADING(state) {
      state.registerRes = false
      state.loading = true
    },
    REGISTER_USER_SUCCESS(state) {
      state.registerRes = true
      state.snack.show = true
      state.snack.text = "注册成功"
      state.snack.color = "success"
    },
    REGISTER_USER_FAILURE(state) {
      state.snack.show = true
      state.snack.text = "注册失败"
      state.snack.color = "error"
    },
    IS_LOGIN(state) {
      state.isLogin = !state.isLogin
    },
    IS_AUTHENTICATED(state) {
      state.isAuthenticated = !state.isAuthenticated
    },
  },
  actions,
  modules: {
  }
})
