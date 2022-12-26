<template>
  <div class="saveviewbook">
    <div class="partie-img" :style="online('http://127.0.0.1:8000/storage/images/'+book.picture_url)">
          <h1>{{book.title}}</h1>
          <h4>{{book.chapters[currentEpisode].title}}</h4>
          <div class="btn-list">
            <button class="icon" @click.prevent="currentEpisode -1 >= 0 && isDownload ? decrement(book['chapters'][currentEpisode -1 ].id):''">&#10007;</button>
            <button class="icon" @click.prevent="currentEpisode +1 <= book['chapters'].length -1 && isDownload? increment(book['chapters'][currentEpisode+1].id):''">&#43;</button>
          </div>
    </div>
    <div class="part-text">
      <div class="part-left">
          <p v-for="paragraph in chapters_book.paragraphs" :key="paragraph.id">{{(paragraph.content)}}</p>
          <div class="two-btn">
             <a @click.prevent="currentEpisode +1 <= book['chapters'].length -1 && isDownload? increment(book['chapters'][currentEpisode+1].id):''">Voir plus</a>
             <button v-if="!isDownload" @click.prevent="toDownload(book.id,user.id)">Sauvegarder</button>
          </div>
      </div>
    </div> 
  </div>
</template>

<script>
import { ref, onMounted, computed} from 'vue';
import useBook from '../../services/BookService';
import tools from  '../../mixins/index.js'
import store from '../../store';
import router from '../../router';

export default {
  props:{
    id: {
      type: String,
      require: true
    },
    isdownload:{
      require:true
    }
  },
  setup (props) {
    /* Variables */
    const {getBook, book,getChapters,chapters_book,download} = useBook();
    const {online} = tools()
    let id = ref(props.id);
    let user = ref([]);
    let isDownload = ref((props.isdownload == 'false' || props.isdownload == '0') ? false: true)
    let currentEpisode = ref(0)
    
    /* Elements qui montent avec la page */
    onMounted(()=>{
      /* book */
       function init(){
         if(sessionStorage.getItem('currentEpisode')){
           currentEpisode.value = parseInt(sessionStorage.getItem('currentEpisode'))
           getChapters(sessionStorage.getItem('currentId'))
         }else{
           currentEpisode.value = 0
         }
       }
      init()
      function AnotherInit(){
        getChapters(store.state.first_id)
      }
      AnotherInit()
      //getBook(id.value)
      getBook(id.value)
      /* User */
      store
        .dispatch('getUser')
        .then((res)=>{
          user.value = res.data.data;
        })
    });
    const idFirst = computed(()=>{
       return sessionStorage.getItem('first_id')
    })
    /* Pour la méthode download */
   const toDownload = async (book_id,user_id) => {
      await download({'book_id':book_id, 'user_id':user_id})
      await router.push({name: 'dashboard'})
   }
   /* Des actions sur les buttons de changement d'episode*/
   const increment = (id) => {
      currentEpisode.value += 1
      sessionStorage.setItem('currentEpisode',currentEpisode.value)
      sessionStorage.setItem('currentId',id)
      getChapters(id)
   }
  
   const decrement = (id) => {
      currentEpisode.value -=1 
      sessionStorage.setItem('currentEpisode',currentEpisode.value)
      sessionStorage.setItem('currentId',id)
      getChapters(id)
   }
   
   
    return {
      id,
      book,
      online,
      isDownload,
      toDownload,
      user,
      getChapters,
      chapters_book,
      increment,
      decrement,
      currentEpisode,
      sessionStorage,
      store,
      window
    }
  }
}
</script>

<style  scoped>
.saveviewbook{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.partie-img{
  background-color:#E5E5E5;
  height: 350px;
  width:80vmax;
  background-size:45%;
  background-repeat:no-repeat;
  background-position:right;
  border-radius: 2px;
  margin: 0 0 20px 0; 
}
h1{
  margin: 3rem 0 8rem 5rem;
  font-weight:600;
  font-family: 'Poppins' ,sans-serif;
  color:#004AA7;
  font-size: 45px;
  font-style:bold;
  text-transform: uppercase;
}
h4{
  width: 40%;
  text-align: center;
  font-weight:600;
  color:#000000;
}
.btn-list{
  width: 40%;
  text-align: center;
  margin-top: 15px;
  cursor: pointer;
}
.icon{
 margin-right: 6px;
 width: 40px;
 height: 30px;
 border: none;
 background:#004AA7;
 border-radius: 1px;
 color:#ffffff;
 font-size: 16px;
 cursor: pointer;
}
.part-text{
  width:80vmax;
  display: flex;
  height: auto;
  margin: 0 0 20px 0;
}
.part-left{
  margin: 0 2% 0 0;
}
 
.part-left::first-letter{
  font-size: 50px;
  color:#004AA7;
  padding: 10px 0 0 0;
  font-weight: 600;
  float: left;
}


p{
 margin-bottom: 10px;
}
a{
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.two-btn button,.two-btn a{
 width: 200px;
 height: 35px;
 border: none;
 background:#004AA7;
 border-radius: 2px;
 color:#ffffff;
 font-size: 16px;
 cursor: pointer;
}
.two-btn{
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 1020px){
   
   .part-text{
    flex-direction:column;
    width: 100%;
   }
   .partie-img{
     width: 100%;
     background-size:cover;
   }
   .two-btn{
    display: flex;
    flex-direction: column;

   }
   .two-btn button,.two-btn a{
     width: 100%;
     margin: 1.5% 0;
   }
   .saveviewbook{
     padding: 0 2%;
   }
   .theEnd::first-letter{
  font-size: 16px;
  color:black;
  padding: 10px 0 0 0;
  font-weight: 600;
  float: none;
  }
  h1{
    text-align:center;
    margin: 3rem 0 8rem 0;
    font-size: 30px;
  }
  .btn-list{
  width: 40%;
  text-align: center;
  margin-left: -5%;
}
h4{
  margin-left: 0;
}
}

</style>