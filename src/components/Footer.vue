<template>
  <footer>
    <p @click="changeFooterTitle">{{ copyright }} {{ title }}</p>
  </footer>
</template>

<script>

import {bus} from '../main';

export default {
  props:{
    title:{
      type:String
    }
  },
  data(){
    return {
      copyright: 'Copyright 2020'
    }
  },
  methods:{
    changeFooterTitle(){
      // this.$emit('changeFooterTitle', {name:'Juyel Rana', age:25});
      bus.$emit('changeFooterTitle', {name:'Juyel Rana', age:25});
    }
  },
  created(){
    bus.$on('changeTitle',(data)=>{
      this.title = data.name + '=>'+data.age;
    });

    bus.$on('changeFooterTitle',(data)=>{
      this.title = data.name + '=>'+data.age;
    });
  }
}
</script>

<style scoped>
footer{
  background: #222;
  padding: 6px;
}
p{
  color: lightgreen;
  text-align: center;
}
</style>
