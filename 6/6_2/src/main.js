import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('readablePrice', function(value){
  return value.toFixed(2) + ' PLN';
});

Vue.filter('VAT', function(value){
  return (value*.23).toFixed(2) + ' PLN';
});

new Vue({
  render: h => h(App),
}).$mount('#app')
