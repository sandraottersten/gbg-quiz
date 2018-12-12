<template>

<div>
<svg width="10%" height="10%" viewBox="-1 -1 2 2" class="donut">
 <circle cx="0" cy="0" r="1" fill="#dddddd" />
 <path :d=calc :fill=color ></path>
</svg>
<p>{{nowTime}}</p>
</div>

</template>

<script>
export default {
  name: 'Timer',
  props: {
    date: {
      type: String
    }
  },
   data(){
   return {
     time: 15,
     percent:1,
     color: 'red',
     startX:1,
     startY:0,
     currentPercent:0
   }
 },
 methods: {
   getPieVal(per){
     const x = Math.cos(2 * Math.PI * per);
     const y = Math.sin(2 * Math.PI * per);
     return [x, y];
   },
   start(){
     TweenMax.to(this.$data, this.time, {
       currentPercent : this.$data.percent,
       onComplete:this.complete,
       ease: Power0.easeNone
     });
   },
   complete(){
     alert("Finish")
   }
 },
 computed : {
   calc(){
     const [endX, endY] = this.getPieVal(this.$data.currentPercent);
     const largeArcFlag = this.currentPercent > .5 ? 1 : 0;
     const pathData = [
       `M ${this.$data.startX} ${this.startY}`,
       `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
       `L 0 0`,
       ].join(' ');
     return pathData;
   },
   nowTime(){
     var vm = this
     return Math.ceil(vm.time - vm.time * vm.currentPercent)
   }
 },
 mounted(){
   setTimeout(()=>{
     this.start()
   },1000);
 }

}

</script>

<style>

</style>
