import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "uikit/dist/css/uikit.min.css";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

import "./assets/styles/main.scss";

// loads the Icon plugin
UIkit.use(Icons);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
