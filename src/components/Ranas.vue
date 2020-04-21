<template>
  <div id="ranas">
    <ul>
      <li v-for="rana in ranas" @click="rana.show = !rana.show">
        <h2>{{ rana.name }}</h2>
        <h3 v-show="rana.show">{{ rana.speciality }}</h3>
      </li>
    </ul>
    <button @click="deleteRana">Delete Rana</button>
  </div>
</template>

<script>
export default {
  // Reciving props from parent App.vue
  props:{
    ranas:{
      type:Array,
      required:true
    }
  },
  data(){
    return {

    }
  },
  methods:{
    deleteRana(){
      this.ranas.pop();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#ranas{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
