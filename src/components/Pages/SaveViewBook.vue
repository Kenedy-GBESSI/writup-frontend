<template>
  <div class="saveviewbook">
    <div class="partie-img">
          <h1>le bonheur rate</h1>
          <h4>EPISODE 1</h4>
          <div class="btn-list">
            <button class="icon">&#10007;</button>
            <button class="icon">&#43;</button>
          </div>
    </div>
    <div class="part-text">
       <div class="part-left">
          <p class="forLetter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
       </div>
       <div class="part-right">
        <p class="forLetter theEnd">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat commodo consequat commodo consequat </p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <div class="two-btn">
             <button>Voir plus</button>
             <button>Sauvegarder</button>
          </div> 
          </div>
    </div>
    
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup () {
    const state = reactive({
      count: 0,
    })
  
    return {
      ...toRefs(state),
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
  height: 330px;
  width:80vmax;
  background-image: url('./src/assets/images/pexels-william-fortunato-6392979-removebg-preview.png');
  background-size:54%;
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
.forLetter::first-letter{
  font-size: 50px;
  color:#004AA7;
  padding: 10px 0 0 0;
  font-weight: 600;
  float: left;
}


p{
 margin-bottom: 10px;
}
.two-btn button{
 width: 200px;
 height: 35px;
 border: none;
 background:#004AA7;
 border-radius: 2px;
 color:#ffffff;
 font-size: 16px;
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
   .two-btn button{
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
  margin-left: -5%;
}
}

</style>