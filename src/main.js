import "bootstrap/dist/css/bootstrap.min.css"

import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import vue3StarRatings from "vue3-star-ratings";


/*Font awesome*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'



library.add(fab,fas,far)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.component("vue3-star-ratings", vue3StarRatings)
.mount("#app");

import "bootstrap/dist/js/bootstrap.js"