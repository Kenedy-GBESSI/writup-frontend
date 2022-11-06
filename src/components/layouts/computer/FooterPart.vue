<template>
  <div class="footer">
   <p>{{value}} WritUp Tout droit reservé</p>
   <p><router-link to="">Politique de confidentialité</router-link></p>
    <div class="links">
    <p>Suivez nous sur</p>
    <p class="link"><router-link to="/"><img src="@/assets/images/a80f6d910e41e9de77f6b1248c12c2c8.png" alt="" width="24" height="24"></router-link></p>
    <p class="link"><router-link to=""><img src="@/assets/images/607fe4a6b7204f096af61750cc4926bc.png" alt="" width="27" height="27"></router-link></p>
    <p class="link"><router-link to=""><img src="@/assets/images/b442f32356f3fb0d01088dd191671af9.png" alt="" width="21" height="21"></router-link></p></div>
  </div>
</template>

<script>
import tools from '../../../mixins/index.js'
export default {
  setup () {
     const {theDate} = tools();
     const value = theDate();
    return {
      value
    }
  }
}
</script>

<style scoped>
.footer{
  position: relative;
  bottom: 0;
  background-color: var(--vt-c-blue);
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height:10vh;
}
.footer p,.footer div{
  font-size:13px;
  line-height: 28px;
}
.links{
  display: flex;
  justify-content: center;
  align-items: center;
}
.link{
  padding: 6px 6px 0 6px;
  cursor: pointer;
}
@media screen and (max-width: 1020px){
  .footer{
    flex-direction: column;
    align-items: start;
    padding-left: 5%;
    height:auto;
  }
}

</style>