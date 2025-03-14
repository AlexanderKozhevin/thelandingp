import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  // store.commit('SET_LANG', locale)
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'ru',
    messages: {
      'en': require('~/locales/en.json'),
      'ru': require('~/locales/ru.json')
    }
  });

}
