import Vue from 'vue'
import App from './App.vue'
import debounce from 'lodash/debounce';

Vue.directive('scroll', {
  inserted: (el, binding) => {
    const fn = debounce(evt => {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', fn)
      }
    }, 100)
    window.addEventListener('scroll', fn)
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
