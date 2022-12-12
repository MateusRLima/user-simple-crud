import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getAuth } from "firebase/auth"
import VueTheMask from 'vue-the-mask'

const firebaseConfig = {
  apiKey: "AIzaSyBpIOH0-WQLjuIu71kfofKbdXKTtBSCb4s",
  authDomain: "pontotel-a95fe.firebaseapp.com",
  databaseURL: "https://pontotel-a95fe-default-rtdb.firebaseio.com",
  projectId: "pontotel-a95fe",
  storageBucket: "pontotel-a95fe.appspot.com",
  messagingSenderId: "903683070076",
  appId: "1:903683070076:web:edcaac4faa2fbbb98c91f9"
};

const firebase = initializeApp(firebaseConfig)

export const db = getDatabase(firebase);
export const auth = getAuth(firebase);

Vue.config.productionTip = false
Vue.use(VueTheMask)

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      vuetify,
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

