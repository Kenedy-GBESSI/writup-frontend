<script>
import { onMounted, ref } from 'vue';
import useBook from '../services/BookService.js'
import OverViewBook from '../components/Pages/OverViewBook.vue';
import store from '../store';
 export default {
  components: { OverViewBook },
    setup(){
       const { getBooks,books} = useBook();
       onMounted( () => {
        getBooks();
      });
      let num  = ref(0)


      return {
          getBooks,
          books,
          num,
          store
      }
    }
 }

</script>

<template>
  <main>
  <over-view-book v-for="book in books" :key="book.id" :title="book.title" :img="book.picture_url" :summary="book.summary" :id="book.id" :isDownload="true"></over-view-book>
  </main>
</template>
<style scoped>
main{
  top: 140px !important;
  position: relative;
  margin-bottom:160px ;
}
@media screen and (max-width: 1020px){
   main{
    top: 100px !important;
   }
}
</style>
