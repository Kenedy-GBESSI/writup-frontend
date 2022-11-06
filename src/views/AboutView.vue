<template>
  <div class="about">
    <div class="this_a_about">
       <h2>A PROPOS</h2>
       <div class="forText">
          <hr>
          J'ai découvert l'art d'écrire suite à la lecture du roman <cite>Les frasques d'Ebinto</cite> du
          romancier <span>Amadou Koné</span>. A la fin de la lecture de ce roman,je tombe soudainement amoureux de la lecture et de l'écriture des romans.
          L'envie est surestimée lorsqu'en lisant la quatrième page de couverture du même roman, j'ai découvert que cet auteur n'avait que dix-huit(18) ans 
          au moment où il éditait son livre. Ainsi, cher visiteur, lorsque l'esprit atteint la maturité, il n'entend plus le corps grandit avant de s'exprimer. J'ai commencé par écrire de 
          petites nouvelles pour nourrir ma passion. Aujourd'hui, je suis concepteur de sites web et je m'attache à l'Intelligence Artificielle afin d'y faire un master mais j'ai également une 
          vision littéraire . Et c'est donc cette dernière qui m'a poussé à mettre en place ce site dedié à mes oeuvres littéraires afin de permettre à tous le parcours de mon monde fictif même si dans ma 
          manière d'écrire les faits, je m'inspire pour la plus part du temps des faits sociaux et réels.
          <p><cite>GBESSI KENEDY</cite><b>(Auteur)</b></p>
       </div>
    </div>
  </div>
</template>
<script></script>

<style scoped>
.about{
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.this_a_about{
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  flex-wrap: wrap;
  height: 90vh;
  width: 80vmax;
  background-color:#E5E5E5;
  background-image: url('./src/assets/images/IMG_20220211_175005_870.jpg');
  background-size:contain;
  background-repeat:no-repeat;
  background-position:left;
}
.forText{
  width: auto;
  height: 50%;
  background-image: url('@/assets/images/Circles-2-1-8026f709f80d383dec3163cb2de995217a73572aafe0fab50b038de693412e8a.svg');
  background-size:contain;
  background-repeat:no-repeat;
  background-position:center;
  line-height:2;
  text-align: justify;
  margin-left:25%;
  padding:1% 2%;
}
h2{
  text-align: center;
  margin-left:20%;
  color:#004AA7;
  font-weight:550;
}
span{
  font-weight: bold;
  font-size:17px;
}
b{
  padding-right: 2.5%;
}
p{
  text-align: right;
  padding: 2%;
  display: flex;
  flex-direction: column;
}
hr{
  height: 3px;
  /* background:black; */
  background: #004AA7;
  /* border:none; */
  /* background:#004AA7; */
}
p cite{
  font-weight:800;
  font-size: 17px;
}
@media screen and (max-width: 1020px){
  .forText{
    height: auto;
    margin-left:0;
    padding: 3% 3% 3% 3%;
    background-image: url('./src/assets/images/IMG_20220211_175005_870.jpg');
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    color:rgb(11, 10, 0);
  }
  .this_a_about{
    height: auto;
    background:none;
  }
  .about{
    top: 55px !important;
    margin-bottom: 100px;
    width: 100%;
  }
  h2{
    margin-left:0;
    padding: 2% 0 0 0;
  }

}
</style>
