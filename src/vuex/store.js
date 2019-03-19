import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    loginState: 0
}

const mutations={
    changeLoginState(state){
        if (state.loginState==0) {
            state.loginState=1;
        } else {
            state.loginState=0;
        }
    }
}

export default new Vuex.Store({
    state,
    mutations
})



