<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
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
      title: this.title
    }
  },
  methods:{
    changeTitle(){
      // this.$emit('changeTitle', {name:'Rana Khan', age:24});
      bus.$emit('changeTitle', {name:'Rana Khan', age:24});
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
header{
  background: lightgreen;
  padding: 10px;
}
h1{
  color: #222;
  text-align: center;
}
</style>
