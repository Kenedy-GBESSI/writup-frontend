<template>
  <div id="inscription">
     <div class="wrapper">
        <div class="part-ins">
           <h3>CONNEXION</h3>
           <div class="for-image"><img src="@/assets/images/pexels-william-fortunato-6392979-removebg-preview.png" alt="research"></div>
           <form @submit.prevent="tologin">
               <div class="wrapper-div">
                  <label for="email">Email<span v-if="login_errors.email">  ({{login_errors.email}})</span></label>
                  <input type="email" id="email" placeholder="gbessikenedy@gmail.com" v-model="data.email">
               </div>
               <div class="wrapper-div">
                  <label for="password">Mot de passe
                    <span v-if="login_errors.password">  ({{login_errors.password}})</span> 
                    <span v-if="login_errors.error">  ({{login_errors.error}})</span>
                  </label>
                  <input type="password" id="password" placeholder="........" v-model="data.password">
                  <span class="forget span-text">Mot de passe oublié</span>
               </div>
               <div><button>Connexion</button></div>
           </form>
           <span class="span-text"><router-link to="/register">S'inscrire</router-link></span>
           <span class="span-text"><router-link to="">Modifier le mot de passe</router-link></span>
        </div>
     </div>
  </div>
</template>

<script se>
import { reactive, toRefs } from 'vue'

import store from '../../store';
import router from '../../router';
export default {
  setup () {
    const login_errors = store.state.user.errors;  
     const data = reactive({
      'email': '',
      'password': ''
     })

    const tologin = () =>{
        store
        .dispatch('login',data)
        .then((res) => {
            router.push({name: 'dashboard'})
            console.log(login_errors)
        })

    }
   return {
      tologin,
      data,
      login_errors
    }
  }
}
</script>

<style  scoped>
.wrapper{
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  height: 530px;
  width: 80vmax;
  background-color:#E5E5E5;
  margin: 100px auto 12px  auto;
  background-image: url('./src/assets/images/pexels-william-fortunato-6392979-removebg-preview.png');
  background-size:65%;
  background-repeat:no-repeat;
  background-position:right;
  font-family: sans-serif;
  font-size: 14px;
}
.for-image{
  display: none;
}
#inscription{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.part-ins{
  display: flex;
  flex-direction: column;
  width:550px; 
  margin: auto 0  auto 80px;
}

form div,h3{
  display: flex;
  flex-direction: column;
  margin: 10px;
}
span{
  color:#004AA7;
}
button{
  margin: 10px 0 0 0;
  color: #FFFFFF;
  font-style: bold;
  font-size: 17px;
  letter-spacing: 0.3px;
  line-height:28px;
  background:#004AA7;
}
.span-text{
  display: flex;
  flex-direction: column;
  margin: 10px;
  color:#004AA7;
}
span{
  color:rgb(209, 139, 139);
}
input,button{
  height: 37px;
  border: none;
  border-radius: 3px;
}
input{
  padding-left: 10px;
}
.forget{
  display: block;
  left: 300px;
  cursor: pointer;
}
@media screen and (max-width: 1020px) {
  .for-image img{
    max-width: 100%;
    height: auto;
  }
  .for-image{
    padding: 5%;
    display: block;
  }
  .wrapper{
    height: auto;
    margin: 70px auto 12px  auto;
    background-image: none;
    font-size: 16px;
    width: 70vmax;
  }
  .part-ins{
  display: flex;
  flex-direction: column;
  width:100%;
  margin: 0;
}
h3{
  text-align:center;
  margin: 12px 0 0 0;
  font-size:20px;
  font-weight: bold;
  color:#004AA7;
}
.forget{
  display: block;
  left: 0;
  text-align:right;
}

}
</style>