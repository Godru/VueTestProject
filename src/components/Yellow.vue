<template>
  <div id="app">
    <div class="lighter__block">
      <div class="lighter__red"/>
      <div class="lighter__yellow"/>
      <div class="lighter__green">{{timer}}</div>
    </div>
    <div class="lighter__foot"/>
  </div>
</template>


<script>
export default {
    name: 'yellow',
    data() {
        return{
            timer: 3
        }
    },
    methods:{
        timerChange(){
            this.timer--;
            if(this.timer ===0){
                window.location.pathname = '/3';
            }
        },
    },
    mounted: function () {
        document.title = 'Yellow';
        let timerChange = this.timerChange;
        setInterval(function () {
            timerChange();
        },1000);
    }
}

</script>


<style scoped>
 @import "../main.css";
  .lighter__green{
    color: #cfc800;
  }
  .lighter__yellow{
    background-color: yellow;
  }
</style>
