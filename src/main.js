import "bootstrap/dist/css/bootstrap.min.css"

import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";

/*Font awesome*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount("#app");

import "bootstrap/dist/js/bootstrap.js"