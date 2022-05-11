import {loginUser, logoutUser, registerUser} from "../../services/auth.service";

const initialState = () => ({
    user: null,
    token: '',
});

export default {
    namespaced: true,
    getters: {
        isLoggedIn(state) {
            return Boolean(state.token)
        }
    },
    state: initialState(),
    mutations: {
        SET_USER_DATA(state, newUser) {
            state.user = newUser
        },
        SET_TOKEN(state, newToken) {
            state.token = newToken
        },
        CLEAR_USER_DATA(state) {
            Object.assign(state, {...initialState()})
        }

    },
    actions: {
        async login({commit}, payload) {
            const {data} = await loginUser(payload);
            const {user, token} = data;
            commit('SET_USER_DATA', user);
            commit('SET_TOKEN', token)
        },
        async registerUser({commit}, payload) {
            const {data} = await registerUser(payload);
            const {user, token} = data;
            commit('SET_USER_DATA', user);
            commit('SET_TOKEN', token)
        },
        async logout({commit}){
            await logoutUser();
            commit('CLEAR_USER_DATA')
        }
    }
}