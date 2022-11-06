<script>
import { onMounted, ref } from 'vue'
import FooterPart from './components/layouts/computer/FooterPart.vue'
import HeaderMobile from './components/layouts/Mobile/HeaderMobile.vue'
import HeaderPart from './components/layouts/computer/HeaderPart.vue'
import HeaderPart2 from './components/layouts/computer/HeaderPart2.vue'
import store from './store'
import HeaderMobile2 from './components/layouts/Mobile/HeaderMobile2.vue'


  export default{
  components: { HeaderMobile, FooterPart, HeaderPart, HeaderPart2, HeaderMobile2 },
     setup (){
      let isMobile = ref(window.innerWidth <= 912);
      onMounted( () => {
        window.addEventListener('resize', ()=>{
          isMobile.value = window.innerWidth <= 912;
          console.log(isMobile.value)
        })
      })

      return {
         isMobile,
         store
         
      }
     }
  }
  


</script>

<template>
  <div class="wrapper">
     <div class="header1" v-if="store.state.user.token">
        <HeaderMobile2 v-if="isMobile" />
        <HeaderPart2 v-if="!isMobile" />
     </div>
     <div class="header2" v-if="!store.state.user.token">
         <header-mobile v-if="isMobile" />
         <header-part v-if="!isMobile" />
     </div>
     <router-view />
     <footer-part />
  </div>
</template>

<style scoped>


.wrapper{
  position: relative;
  width: 100%;
  min-height: 100vh;
}


/*
header {
  
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}


nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}*/
</style>
