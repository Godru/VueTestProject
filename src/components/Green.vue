<template>
  <div id="app">
    <div class="lighter__block">
      <div class="lighter__red">{{timer}}</div>
      <div class="lighter__yellow"/>
      <div class="lighter__green" v-bind:style="{backgroundColor: greenLighterColor}"/>
    </div>
    <div class="lighter__foot"/>
  </div>
</template>


<script>
export default {
    name: 'red',
    data() {
        return{
            greenLighterColor: 'green',
            timer: 15
        }
    },
    methods:{
        timerChange(){
            this.timer--;
            if(this.timer<=3){
                if(this.greenLighterColor ==='green'){
                    this.greenLighterColor = 'white'
                }else{
                    this.greenLighterColor = 'green'
                }
            }
            if(this.timer ===0){
                window.location.pathname = '/1';
            }
        },
    },
    mounted: function () {
        document.title = 'Green';
        let timerChange = this.timerChange;
        setInterval(function () {
            timerChange();
        },1000);
    }
}

</script>

<style scoped>
  @import "../main.css";
  .lighter__red{
    color: green;
  }

</style>
