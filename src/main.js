import Vue from 'vue'
import Red from './components/Red.vue'
import Yellow from './components/Yellow.vue'
import Green from './components/Green.vue'

const routes = {
      '/1': Red,
      '/2': Yellow,
      '/3': Green
};
Vue.config.productionTip = false;

new Vue({
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent () {
            if(this.currentRoute === '/')
                window.location.pathname = '/1';
            return routes[this.currentRoute]
        }
    },
    render (h) { return h(this.ViewComponent) },
}).$mount('#app');

