<template>
  <div id="app">
    <div class="lighter__block">
      <div class="lighter__red" v-bind:style="{ backgroundColor: redLighterColor}"/>
      <div class="lighter__yellow"/>
      <div class="lighter__green">{{timer}}</div>
    </div>
    <div class="lighter__foot"/>
  </div>
</template>


<script>
export default {
    name: 'red',
    data() {
        return{
            redLighterColor: 'red',
            timer: 10
        }
    },
    methods:{
        timerChange(){
           this.timer--;
           if(this.timer<=3){
              if(this.redLighterColor ==='red'){
                  this.redLighterColor = 'white'
              }else{
                  this.redLighterColor = 'red'
              }
           }
           if(this.timer ===0){
               window.location.pathname = '/2';
           }
        },
    },
    mounted: function () {
        document.title = 'Red';
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
    color: red;
  }
</style>
