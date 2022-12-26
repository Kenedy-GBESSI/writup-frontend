<template>
  <div class="dashboard">
    <div class="empty-div">
      <h1>Soyez les bienvenus {{name}} !<span v-if="NumbersOfBooksDownload==0">  Vous n'avez aucun téléchargement de livres</span><b v-else>Vous avez {{NumbersOfBooksDownload}} livre(s) sauvegardé(s) ci-dessous</b></h1>
    </div> 
       <over-view-book v-for="book in user.books" :key="book.id" :title="book.title" :img="book.picture_url" :summary="book.summary" :id="book.id" :isDownload="true"></over-view-book>
    <div class="root">
     <div class="container" v-show="(NumbersOfBooksDownload != books.length)">
          <ul class="progressbar">
            <li class="active"></li>
            <li class="active"></li>
            <li class="plaque"></li>
          </ul>
      </div>
  </div>
  <div class="categorisation">
    <template v-for="book in books" :key="book.id">
      <over-view-book :title="book.title" :img="book.picture_url" :summary="book.summary" :id="book.id" :isDownload="false" v-if="ids_liste.indexOf(book.id)==-1"></over-view-book>
    </template>
  </div>
  </div>

</template>

<script>
import { computed } from 'vue';
import OverViewBook from '../components/Pages/OverViewBook.vue';
import useBook from '../services/BookService.js';
import { onMounted } from 'vue';
import store from '../store';
import { ref } from 'vue';

export default {
  components: { OverViewBook },
  setup () {
    const { getBooks,books} = useBook();
    let user = ref([]);
    let ids_liste = ref([]);
    let NumbersOfBooksDownload = ref(0)
       onMounted( () => {
        getBooks();
        store
        .dispatch('getUser')
        .then(async (res)=>{
          user.value = res.data.data;
          store.state.loading = false
          NumbersOfBooksDownload.value =  user.value.books.length
          for(var i in user.value.books){
            ids_liste.value.push(user.value.books[i]['id'])
          }
        })
      });
console.log(user.value)
    return {
      getBooks,
      books,
      user,
      name: computed(() => {return user.value.name + ' '+ user.value.last_name}), 
      NumbersOfBooksDownload,
      ids_liste
    }
  }
}
</script>

<style scoped>
  .dashboard{
    top: 120px !important;
    position: relative;
    margin-bottom:130px ;
  }
  h1{
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 80vmax;
  margin: 0  0 10px 0;
  font-size: 17.5px;
  border-radius: 2px;
  background-color: #E5E5E5;
  padding: 1.5%;

  }
  .empty-div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container{
  width: 100%;
  position: absolute;
  z-index: 1;
  padding: 0 0 0 0.9%;
}

.progressbar li{
  float: left;
  width: 20%;
  position: relative;
  list-style: none;
  display: flex;
}
.progressbar li:before{
  content:"";
  width: 30px;
  height: 30px;
  border: 2px solid #bebebe;
  display: block;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  line-height: 27px;
  background: white;
  color: #bebebe;
  text-align: center;
  font-weight: bold;
}
.progressbar .plaque:before{
  content:"Non Téléchargés";
  width: 200px;
  height: 32px;
  border: 2px solid #bebebe;
  display: block;
  border-radius: 1px;
  font-weight: bold;
}
b{
  padding: 0 5px;
}
.progressbar li:after{
  content: '';
  position: absolute;
  width:100%;
  height: 3px;
  background: #979797;
  top: 15px;
  left: -50%;
  z-index: -1;
}
.progressbar li:first-child:after{
content: none;
}

.progressbar li.active + li:after{
 background: #004AA7;
}
.progressbar li.active + li:before{
border-color: #004AA7;
background: #004AA7;
color: white
}
.categorisation{
  margin-top: 50px!important;
}

@media screen and (max-width: 1020px){
   .progressbar li{
    width: 32%;
   }
}
</style>