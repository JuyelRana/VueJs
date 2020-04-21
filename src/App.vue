<template>
  <div>
    <!-- Passing props primitive types  -->
    <App-Header :title="title"/>
    <!-- Passing props => reference type -->
    <App-Ranas :ranas="ranas"/>
    <!-- Passing props primitive types  -->
    <App-Footer :title="title"/>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'
import Ranas from './components/Ranas'

export default {
  components:{
    'App-Header':Header,
    'App-Footer':Footer,
    'App-Ranas':Ranas,
  },
  data(){
    return {
      ranas:[
        {name:'Md Juyel Rana', speciality:'Lovely Boy', show:false},
        {name:'Md Ashraful Islam', speciality:'Bad Boy', show:false},
        {name:'Md Afzal Hossain', speciality:'Traitor', show:false},
        {name:'Md Jalal Uddin', speciality:'Good Man', show:false},
        {name:'Most Rokey Begum', speciality:'Good Woman', show:false},
        {name:'Most Mukti Khatun', speciality:'Bootliker', show:false},
      ],
      title:"Juyel Rana",
    }
  }
}
</script>

<style>

</style>
