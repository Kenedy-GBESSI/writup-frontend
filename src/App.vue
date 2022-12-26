<script>
import FooterPart from './components/layouts/computer/FooterPart.vue'
import HeaderMobile from './components/layouts/Mobile/HeaderMobile.vue'
import HeaderPart from './components/layouts/computer/HeaderPart.vue'
import HeaderPart2 from './components/layouts/computer/HeaderPart2.vue'
import HeaderMobile2 from './components/layouts/Mobile/HeaderMobile2.vue'
import ModalReseach from './components/Pages/ModalReseach.vue'
import { computed, onMounted , ref} from 'vue';
import store from './store'
import useBook from './services/BookService.js';
import router from './router'


  export default{
  components: { HeaderMobile, FooterPart, HeaderPart, HeaderPart2, HeaderMobile2,ModalReseach },
     setup (){
      let isMobile = ref(window.innerWidth <= 912);
      const { getBooks,books} = useBook();
      onMounted( () => {
        getBooks();
        window.addEventListener('resize', ()=>{
          isMobile.value = window.innerWidth <= 912;
        });
       
      })

      let modaleActive = ref(false);
      let q = ref('');
      let path = ref(router.currentRoute)

     const toggleModal = () => {
         modaleActive.value = ! modaleActive.value
    }
    const HandlerRecherche = computed( () =>{
        let liste_data = ref([]);
        for( var book in books.value){
          if(books.value[book]['title'].toLowerCase().includes(q.value.toLowerCase()) && q.value){
            liste_data.value.push(books.value[book])
          }
          
        }
        return liste_data.value
    } )
      return {
         isMobile,
         store,
         toggleModal,
         modaleActive,
         q,
         getBooks,
         books,
         HandlerRecherche,
         path
         
         
      }
     }
  }
  


</script>

<template>
  <div class="content-loader" v-show="store.state.loading"><div class="loader" v-show="store.state.loading"></div></div> 
  <div class="wrapper" v-show="!store.state.loading">
     <div class="header1" v-if="store.state.user.token">
        <HeaderMobile2 v-if="isMobile" :toggleModal="toggleModal"/>
        <HeaderPart2 v-if="!isMobile" :toggleModal="toggleModal"/>
     </div>
     <div class="header2" v-if="!store.state.user.token">
         <header-mobile v-if="isMobile" :toggleModal="toggleModal"/>
         <header-part v-if="!isMobile" :toggleModal="toggleModal"/>
     </div>
     <router-view />
     <footer-part />
     <teleport to="#modal-root">
        <ModalReseach @close="toggleModal" :modaleActive="modaleActive">
            <form class="searchForm">
              <input type="text" autofocus name="q" autocomplete="off" placeholder="Rechercher le titre d'une histoire" v-model="q">
              <button class="btn"><img src="@/assets/images/bedc6d99e3f99ce6288d09f94bcfbcbe.png" alt="research"></button>
              <ul v-show="HandlerRecherche.length > 0">
                <li class="first">{{HandlerRecherche.length}} histoire(s) trouvée(s)</li>
                 <li v-for="book in HandlerRecherche" :key="book.id"><a :href="path.meta.isGuest || path.path == '/about' ? '/#book'+book.id : '/dashboard#book'+book.id" @click="toggleModal">{{book.title}}</a></li>
              </ul>
            </form>
         </ModalReseach>
     </teleport>
  </div>
</template>

<style scoped>


.wrapper{
  position: relative;
  width: 100%;
  min-height: 100vh;
}
.searchForm{
  width: 600px;
  background: #f7fafb;
  position: relative;
}
.first{
 color: #004AA7;
}
.searchForm input{
position: fixed;
left: auto;
right: auto;
top: 100px;
width: 600px;
max-width: calc(100% - 20px);
background: #f7fafb;
border-top-left-radius: 3px;
border-top-right-radius: 3px;
padding: calc(1 * 10px);
padding-left: 40px;
font-size: 15px;
outline: none;
}
.searchForm ul{
position: fixed;
display: block !important;
top:142px;
left: auto;
right: auto;
list-style: none;
height: 373px;
width: 599.7px;
padding: calc(1 * 10px);
padding-left: 10px;
overflow: scroll;
background-color: #f7fafb;
border-radius:3px ;
}
ul li{
  margin: 5px 0;
  padding: 10px ;
  cursor: pointer;
}
ul li:hover{
  background-color: #E5E5E5;
}
.btn {
  left: calc(3 * 3px);
  display: inline-flex;
  position: fixed;
  margin-left: 10px;
  top:122px;
  left: auto;
  right: auto;
  transform: translateY(-50%);
  color: inherit;
  padding: 0;
  border: none; 
  cursor: pointer;
  background: 0 0;
  font-size: inherit;
}
@keyframes seachPopInput{
  0% {
    transform: translateY(-20px);
  }
}
@media screen and (max-width: 1020px){
 .searchForm{
  width: 30%;
 }
 .searchForm input{
  width: 60%;
  left: 20%;
  right: 20%;
 }
 .searchForm ul{
  width: 60%;
  left: 20%;
  right: 20%;
 }
 .btn{
  display: none;
 }
  
}

.content-loader{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.loader {
  display: block;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}
@keyframes spin {
   0%{
    transform: rotate(0deg);
   }
   100%{
    transform: rotate(360deg);
   }
}
</style>
