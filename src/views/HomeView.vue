<script>
import { onMounted } from 'vue';
import useBook from '../services/BookService.js'
import OverViewBook from '../components/Pages/OverViewBook.vue';
 export default {
  components: { OverViewBook },
    setup(){
       const { getBooks,books} = useBook();
       onMounted( () => {
        getBooks();
      });


      return {
          getBooks,
          books,
      }
    }
 }

</script>

<template>
  <main>
  <over-view-book v-for="book in books" :key="book.id" :title="book.title" :img="book.picture_url" :summary="book.summary"></over-view-book>
  </main>
</template>
<style scoped>
main{
  top: 100px !important;
  position: relative;
  margin-bottom:100px ;
}
@media screen and (max-width: 1020px){
   main{
    top: 80px !important;
    margin-bottom: 100px;
   }
}
</style>
