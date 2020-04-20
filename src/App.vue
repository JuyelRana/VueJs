<template>
  <div>
    <App-Header/>
    <App-Ranas/>
    <App-Footer/>

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

    }
  }
}
</script>

<style>

</style>
