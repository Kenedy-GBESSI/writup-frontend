<template>
  <div id="inscription">
     <div class="wrapper">
        <div class="part-ins">
           <h3>INSCRIPTION</h3>
           <div class="for-image"><img src="@/assets/images/pexels-william-fortunato-6392979-removebg-preview.png" alt="research"></div>
           <form @submit.prevent="registerUser">
               <div class="wrapper-div">
                  <label for="name">Nom <span v-if="register_errors.name">  ({{register_errors.name}})</span></label>
                  <input type="text" id="name" placeholder="GBESSI" v-model.trim="register_data.name">  
               </div>
               <div class="wrapper-div">
                  <label for="lastname">Prénom<span v-if="register_errors.last_name">  ({{register_errors.last_name}})</span></label>
                  <input type="text" id="lastname" placeholder="Kénédy" v-model.trim="register_data.last_name">
               </div>
               <div class="wrapper-div">
                  <label for="email">Email<span v-if="register_errors.email">  ({{register_errors.email}})</span></label>
                  <input type="email" id="email" placeholder="gbessikenedy@gmail.com" v-model.trim="register_data.email">
               </div>
               <div class="wrapper-div">
                  <label for="password">Mot de passe<span v-if="register_errors.password">  ({{register_errors.password}})</span></label>
                  <input type="password" id="newpassword" placeholder="........" v-model="register_data.password">
               </div>
               <div class="wrapper-div">
                  <label for="password-confirmation">Confirmer le mot de passe</label>
                  <input type="password" id="password-confirmation" placeholder="......." v-model="register_data.password_confirmation" required>
               </div>
               <div><button>Inscription</button></div>
           </form>
           <span class="span-text"><router-link to="/connexion">Se connecter</router-link></span>
        </div>
     </div>
  </div>
</template>

<script>
import {  ref } from 'vue';
import store from '../../store/index.js';
import router from '../../router';
export default {
  setup () {
     const  register_errors = store.state.user.errors;
     let isError = ref(false);
     const register_data = {
      'name': '',
      'last_name': '',
      'password':'',
      'password_confirmation':'',
      'email':'',
     };
     const registerUser = () =>{
          store
              .dispatch('register',register_data)
              .then((res)=>{
                  if(!(res.hasOwnProperty('errors'))){
                    router.push({name: 'dashboard'})
                  } 
              })
          isError.value = register_errors.name != '' || register_errors.email !='' || register_errors.last_name !='' || register_errors.password !='';
     }

    
   return {
      register_data,
      registerUser,
      register_errors,
      isError
    }
  }
}
</script>

<style  scoped>
.wrapper{
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  height: 78.5vh;
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
.span-text{
  display: flex;
  flex-direction: column;
  margin: 10px;
  color:#004AA7;
}
span{
  color:rgb(209, 139, 139);
}
form div,h3{
  display: flex;
  flex-direction: column;
  margin: 10px;
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
input,button{
  height: 37px;
  border: 1px solid white;
  border-radius: 3px;
}
input{
  padding-left: 10px;
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
    width: 100%;
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

  
}



</style>