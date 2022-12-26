<template>
    <transition name="modal-animation">
        <div class="modal" v-show="props.modaleActive" ref="MyModal">
              <transition name="modal-animation-inner">
                <div class="modal-inner" v-show="props.modaleActive">
                    <!-- Modal Content -->
                      <slot />
                </div>     
              </transition> 
        </div>
    </transition>

</template>

<script>
import {onMounted,ref} from 'vue';
export default {
  props: {
    modaleActive: {
        require: true,
        Type: Boolean
    }
  },

  setup(props, {emit}){
     const close = () =>{
        emit('close')
     }
    const MyModal = ref(null);
    onMounted(() => {
      
    }),
    window.onclick = function(event){
      if(MyModal.value === event.target){
        close()
      }
    }

    return{
       props,
       close,
       MyModal
    }
  }
}
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .7);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: SearchPopup .3s;
    
    
}
.modal-inner{
  position: relative;
  padding: 2px;
}
@keyframes SearchPopup{
    0%{
        opacity: 0;
    }
}



</style>