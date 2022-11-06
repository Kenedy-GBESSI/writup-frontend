<template>
  <div class="overwiewbook zoom-in">
      <div class="wrapper" :style="online()">
        <div class="part">
          <h3>{{data.title}}</h3>
          <div class="for-image"><img :src='data.img' alt="research"></div>
          <p>{{data.summary}}</p>
          <button>Voir plus</button>
        </div>
      </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  props: {
    title:{
       require: true,
       type: String
    },
    summary: {
      require: true,
      type: String,
    },
    img: {
      require: true,
      type: String
    }
  },
  setup (props) {

      
      const data = reactive({
        title: props.title,
        summary: props.summary,
        img: 'http://127.0.0.1:8000/storage/images/'+props.img
      });
      const online = ()=>{
        return {
          backgroundImage: `url(${data.img})`
        }
      } 
  
    return {
       data,
       online
    }

  }
}
</script>

<style  scoped>

.wrapper{
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  height: auto;
  width: 80vmax;
  margin: 0  0 20px 0;
  background-blend-mode: multiply; 
  background-size:32%;
  background-repeat:no-repeat;
  background-position:right;
  font-size: 12px;
  border-radius: 2px;
  background-color: #E5E5E5;
  padding: 1.5%;
}
.overwiewbook{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.part{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
}
.for-image{
  display: none;
}
h3{
  padding:0 0 0 2rem;
  font-weight: 700;
  font-family: sans-serif;
  font-size: 20px;
  color: #004AA7;
  text-transform: uppercase;
}
p{
  padding: 1rem 0 1rem 2rem;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.5px;
}
button{
  display:block;
  margin: 0 0 0 2rem;
  width: 190px;
  height: 34px;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  border-radius: 3px;
  background: #004AA7;
}
@media screen and (max-width: 1020px){
  .wrapper{
    height: auto;
    background: none;
    width: 100%;
    background-color:#E5E5E5;
  }
  .part{
    width: 100%;
    text-align: justify;
  }
  p{
    padding: 0 1rem;
  }
  .for-image img{
    max-width: 100%;
    height: auto;
    mix-blend-mode: multiply;
  }
  .for-image{
    padding: 5%;
    padding-top: 1%;
    display: block;
  }
  button{
    margin: 5px auto;
    width: 95%;
    text-align: center;
  }
  h3{
    text-align: center;
    padding: 1rem;
  }
}
</style>