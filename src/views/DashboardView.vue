<template>
  <div class="dashboard">
    <over-view-book v-for="book in books" :key="book.id" :title="book.title" :img="book.picture_url" :summary="book.summary"></over-view-book>
  </div>
</template>

<script>
import { computed } from 'vue';
import OverViewBook from '../components/Pages/OverViewBook.vue';
import useBook from '../services/BookService.js';
import { onMounted } from 'vue';
import store from '../store';
export default {
  components: { OverViewBook },
  setup () {
    const { getBooks,books} = useBook();
       onMounted( () => {
        getBooks();
        console.log(books);
      });
    return {
      getBooks,
      books,
      user: computed(() =>store.state.user.data)
    }
  }
}
</script>

<style scoped>
  .dashboard{
    top: 100px !important;
    position: relative;
    margin-bottom:100px ;
  }

</style>