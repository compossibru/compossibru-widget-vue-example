import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

export default (containerId) => {
    new Vue({
        render: h => h(App)
    }).$mount(`#${containerId}`)
};
