export const strict = false

export const state = () => ({
  locales: ['en', 'ru'],
  locale: 'ru',
})
export const mutations = {

  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }

}
