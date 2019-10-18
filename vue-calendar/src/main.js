import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';
Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyC6JxKHMw6iuvxkUfIGbeWqwnf9TdafMTg",
    authDomain: "vue-calender-a4e29.firebaseapp.com",
    databaseURL: "https://vue-calender-a4e29.firebaseio.com",
    projectId: "vue-calender-a4e29",
    storageBucket: "vue-calender-a4e29.appspot.com",
    messagingSenderId: "674184553609",
    appId: "1:674184553609:web:70d0e2c37d0111e8c9d258",
    measurementId: "G-K2X3V2F348"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
