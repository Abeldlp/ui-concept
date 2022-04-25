import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import MaterialIconSet from 'quasar/icon-set/material-icons';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

import App from './App.vue';
import router from './router';

const app = createApp(App);

MaterialIconSet.table.arrowUp = 'expand_more';

app.use(createPinia());
app.use(Quasar, { icons: { MaterialIconSet } });
app.use(router);

app.mount('#app');
