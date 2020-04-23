<template>
  <div>
    <!-- This tag will alive a component -->
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button @click="component='FormOne'">Form One</button>
    <button @click="component='FormTwo'">Form Two</button>

  </div>
</template>

<script>

import FormOne from './components/FormOne';
import FormTwo from './components/FormTwo';

export default {
  components:{
    'FormOne': FormOne,
    'FormTwo': FormTwo
  },
  data(){
    return {
      component:'FormOne'
    }
  },
  methods:{

  }
}
</script>

<style>

</style>
