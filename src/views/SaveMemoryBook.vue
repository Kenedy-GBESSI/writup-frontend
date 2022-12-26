<template>
  <div class="savememorybook">
    {{sessionStorage.setItem('first_id',book.chapters[0].id)}}
     <save-view-book :id="id" :isdownload="isDownload"></save-view-book>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import SaveViewBook from '../components/Pages/SaveViewBook.vue'
import useBook from '../services/BookService.js' 


export default {
  components: { SaveViewBook },
  props:{
    id:{
      require: true,
    },
    isdownload: {
      require: true
    }
  },
  setup (props) {
    const {getBook,book} = useBook()
    let id = ref(props.id);
    let isDownload = ref(props.isdownload);
    onMounted(async ()=>{
      await getBook(id.value)
    })
    
    const dynamic = computed(()=>{book.value.chapters[0].id})
    return {
       id,
       isDownload,
       book,
       dynamic,
       sessionStorage
    }
  }
}
</script>

<style  scoped>
.savememorybook{
  top: 120px !important;
  margin-bottom: 150px!important;
  position: relative;
}
@media screen and (max-width: 1020px){
  .savememorybook{
    top: 80px !important;
    width: 100%;
   }
}


</style>