import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import {
  Tabbar,
  TabbarItem,
  NavBar,
  Swipe,
  SwipeItem,
  Search,
  Grid,
  GridItem,
  Card,
  Toast,
  List,
  Sidebar,
  SidebarItem,
  Cell,
  CellGroup,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Sku,
  Field,
  Button
} from "vant";

// 引入全局样式
import "./assets/css/style.stylus";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Search);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Card);
Vue.use(Toast);
Vue.use(List);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Sku);
Vue.use(Field);
Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
