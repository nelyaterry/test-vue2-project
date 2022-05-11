import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import authModule from './modules/auth'

const dataState = createPersistedState({
    paths: ['auth.token'],
});


Vue.use(Vuex);


const store = new Vuex.Store({
    modules: {
        auth: authModule,
    },
    plugins: [dataState],
})

export default store;