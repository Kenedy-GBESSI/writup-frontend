import { createStore } from 'vuex';
import tools from '../mixins/index.js'
const {toConcatenate} = tools();
import { reactive } from 'vue';

export default createStore({
  state: {
    user: {
       data: {},
       token: sessionStorage.getItem('TOKEN'),
       errors: reactive({
        'name': '',
        'last_name':'',
        'password': '',
        'email': '',
        'error': ''
       })
    }
  },
  getters: {
  },
  mutations: {
    logout: state => {
        state.user.token = sessionStorage.removeItem('TOKEN')
        state.user.data = {}
    },
    setUser: (state,userData) =>{
       console.log(userData)
      if(userData.hasOwnProperty('message') && !userData.hasOwnProperty('exception')){
        const data_errors = userData.errors;
        for (const key in data_errors) {
          state.user.errors[key] = toConcatenate(data_errors[key])
         }
         state.user.errors.error = ''
      } else if(userData.hasOwnProperty('error')){
           state.user.errors.password = ''
           state.user.errors.error = userData.error
      }else if (userData.hasOwnProperty('exception')){
        state.user.errors.password = ''
        state.user.errors.error = userData.message
      }
      else{ 
        state.user.data = userData.user;
        state.user.token = userData.token;
        sessionStorage.setItem('TOKEN',userData.token)
      }
      /*
        */
    }
  },
  actions: {
    register({commit},user){
       return fetch('http://127.0.0.1:8000/api/auth/register',{
         headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
         },
         method: "POST",
         body: JSON.stringify(user)
       })
       .then((res) => res.json())
       .then((res) => {
         commit('setUser',res);
         return res
       })
    },
    login({commit},data){
        return fetch('http://127.0.0.1:8000/api/auth/login',{
          headers: {
           "Content-Type": "application/json",
           "Accept": "application/json"
          },
          method: "POST",
          body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((res)=> {
           commit('setUser',res)
           return res
        })

    } 
  },
  modules: {
  }
})
