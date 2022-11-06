<template>
  <div class="mobile-header">
     <div class="logo-hamburger">
        <img src="@/assets/images/logo1.png" alt="logo" width="100">
        <button @click="toactive">&#9776;</button>
     </div>
     <div class="mobile-menu" v-show="isActive">
       <ul>
          <li class="menu-item start">
             <router-link to="#"><img src="@/assets/images/bedc6d99e3f99ce6288d09f94bcfbcbe.png" alt="research"></router-link>
          </li>
          <li class="menu-item">
            <router-link to="dashboard">Accueil</router-link>
          </li>
          <li class="menu-item">
            <router-link to="savememorybook">Mes sauvegardes</router-link>
          </li>
          <li class="menu-item">
            <router-link to="about">A propos</router-link>
          </li>
      </ul>
     </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'

export default {
  setup () {
    let isActive = ref(false);
    const toactive = () =>{
       isActive.value = !isActive.value;
    }
  
    return {
      toactive,
      isActive
    }
  }
}
</script>

<style scoped>
.mobile-header{
  background: #fff;
  position:fixed;
  z-index: 100;
  top:0;
  width: 100%;
  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.2);
}
.mobile-menu{
  transition: display .2s ease;
}

.logo-hamburger{
  display: flex;
  justify-content: space-between;
  padding: 2%;
}
button{
  background: none;
  border: none;
  font-weight: 600;
  font-size: 30px;
  color:#004AA7;
}
ul{
  color:black;
  font-weight:500;
  font-size: 17px;
  line-height: 28px;
  font-style: medium;
  letter-spacing: 0.3px;
  list-style: none;
  padding: 0 3% 0 3%;
}
.end{
  border: none !important;
}
.start img{
  transform: translateY(5px);
}
ul li{
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0,0, 0.2);
}
.start{
  border-top: 1px solid rgba(0, 0,0, 0.2);
}

</style>