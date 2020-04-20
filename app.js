var data = {
  name:'Juyel'
}

Vue.component('greeting',{
  template:'<p>Hey there, I am {{ name }} <button @click="changeName"> Change Name</button></p>',
  data(){
    return data;
  },
  methods:{
    changeName(){
      this.name = 'Lamia, My love'
    }
  }
});

new Vue({
  el: '#app-one'
});

new Vue({
  el: '#app-two'
});
