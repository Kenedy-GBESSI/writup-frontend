<template>
  <div class="menu">
     <div class="logo">
      <a href="/dashboard" class="f"><img src="@/assets/images/logo1.png" alt="WritUp logo" width="170" ></a>
     </div>
     <div class="all-menu">
       <ul class="list-menu">
          <li class="menu-item">
            <router-link to="/dashboard">Accueil</router-link>
          </li>
          <li class="menu-item">
            <router-link :to="num">Mes sauvegardes</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/about">A propos</router-link>
          </li>
          <li class="menu-item">
            <a @click="logout">Déconnexion</a>
          </li>
          <li class="menu-item start">
             <a @click="props.toggleModal()"><img src="@/assets/images/bedc6d99e3f99ce6288d09f94bcfbcbe.png" alt="research"></a>
          </li>
       </ul>
     </div>
  </div>
</template>

<script>
import router from '../../../router';
import store from '../../../store';
import {ref, onMounted, computed} from 'vue';
export default {
  props: {
    toggleModal: {
      Type : Function
    }
  },
  setup (props) {
     
    function logout(){
        store.commit('logout');
        router.push({
          name: 'home'
        })
    }

    let user = ref([]);
    let ids_liste = ref([]);
       onMounted( () => {
        store
        .dispatch('getUser')
        .then((res)=>{
          user.value = res.data.data;
          for(var i in user.value.books){
            ids_liste.value.push(user.value.books[i]['id'])
          }
        })
      });
    
      
      
    return {
      logout,
      num: computed(()=> {
        if(ids_liste.value.indexOf(1)==-1){
          return '/savememorybook/1/false'
        }
        return '/savememorybook/1/true'
      }),
      props
     
      
    }
  }
}
</script>

<style scoped>
.menu{
  display: flex;
  top:0px;
  position:fixed;
  background:#fff;
  z-index:100;
  justify-content:space-around;
  align-items: center;
  line-height: 1.5;
  height: 11vh;
  width: 100%;
  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.2);
}

.logo{
  margin: 5px;
}
input{
  height: 37px;
  border:none;
  border-radius: 20px;
  padding: 15px;
  outline-color: #004ba711;
  font-size: 17px;
  background: #f5f5f5;
}
.all-menu{
  font-weight:500;
  font-size: 17px;
  line-height: 28px;
  font-style: medium;
  letter-spacing: 0.3px;
  display: flex;
  justify-content:center;
  align-items:center;
}
ul{
  list-style: none;
  display: flex;
  justify-content: space-around;
}
ul li{
  display: inline-block;
  margin: 5px 30px;
}
a{
  cursor: pointer;
}
.router-link-active{
  border-bottom: 2px solid seagreen;
}

</style>