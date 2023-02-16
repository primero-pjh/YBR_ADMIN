import { createApp } from 'vue';
import App from './App.vue';
import { 
  Button, Icon, Form, Field, CellGroup, Space, List, Cell,
  Tabbar, TabbarItem,
  Switch,
  Row, Col,
  NavBar,
  Card,
  Image as VanImage, Dialog ,
  Overlay, Toast, 
  ActionSheet, Calendar, Locale,
  SwipeCell, Divider,
  Tab, Tabs, Loading, Badge, Popup,
  Search, Empty, Skeleton
} from 'vant';
import 'vant/lib/index.css';
import router from './router';
import store from "./store";
import config from "../package.json";
import { createI18n } from 'vue-i18n';
import messages from './i18n';
const i18n = createI18n({
  locale: 'ko',
  fallbackLocale: 'en',
  messages
});
const app = createApp(App);
import '../public/css/common.css';
app.config.globalProperties.$store = store;
app.config.globalProperties.$config = config;
console.error(`ybr version: ${config.version}`);
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';
import koKR from 'vant/es/locale/lang/ko-KR';
Locale.use('ko-KR', koKR);

app.use(Button);
app.use(Icon);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Space);
app.use(List);
app.use(Cell);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Switch);
app.use(Row);
app.use(Col);
app.use(NavBar);
app.use(Card);
app.use(VanImage);
app.use(Dialog);
app.use(Overlay);
app.use(Toast);
app.use(ActionSheet);
app.use(Calendar);
app.use(SwipeCell);
app.use(Divider);
app.use(Tab);
app.use(Tabs);
app.use(Overlay);
app.use(Loading);
app.use(Badge);
app.use(Popup);
app.use(Search);
app.use(Empty);
app.use(Skeleton);
app.use(router);
app.use(store);
app.use(i18n);
app.use(VCalendar, {})
app.mount('#app');


