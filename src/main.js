// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueFire)

firebase.initializeApp({
  apiKey: 'AIzaSyDhTP6sNSs3c4n55V69tM1dH--pBgEjUtE',
  authDomain: 'soft-kudos.firebaseapp.com',
  projectId: 'soft-kudos',
  storageBucket: 'soft-kudos.appspot.com',
  messagingSenderId: '272127081098',
  appId: '1:272127081098:web:622bb52ed1aaf7c8f20b73'
})

export const db = firebase.firestore()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
