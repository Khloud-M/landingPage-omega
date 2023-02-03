import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import style file
import "@/assets/style/color.css";
// import bootsrap
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap";
// import AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
createApp(App)
.use(router)
.use(bootstrap)
.mount("#app");
