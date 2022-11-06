<template>
  <div class="savememorybook">
     <save-view-book/>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import SaveViewBook from '../components/Pages/SaveViewBook.vue'

export default {
  components: { SaveViewBook },
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
.savememorybook{
  top: 100px !important;
  margin-bottom: 100px!important;
  position: relative;
}
@media screen and (max-width: 1020px){
  .savememorybook{
    top: 80px !important;
    margin-bottom: 100px;
    width: 100%;
   }
}


</style>