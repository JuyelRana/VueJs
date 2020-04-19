new Vue({
  el: '#app',
  data: {
    characters:['Mijan','Rahmans','Afrin','Jamiul'],
    ranas:[
      {name: 'Juyel', age:25},
      {name: 'Lamia', age:22},
      {name: 'Mim', age:24},
    ],
    error:false,
    success:false,
    available:false,
    nearby:false,
    name:'Juyel',
    job:'Software Engineering',
    website:'http://shaorinacademy.com/',
    websiteTag:'<a href="http://shaorinacademy.com/">shaorinacademy</a>',
    age:23,
    x:0,
    y:0,
    a:0,
    b:0
  },
  methods:{
    nameInput(){
      console.log('Enter Name');
    },
    ageInput(){
      console.log('Enter Age');
    },
    greet(msg){
      return 'Good '+msg+' '+this.name+' You are a '+this.job;
    },
    add(inc){
      this.age+=inc;
    },
    substract(dec){
      this.age-=dec;
    },
    updateXY(event){
      console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    clickOrin(){
      alert('Click Me');
    }
  },
  computed:{
    addToA(){
      console.log("addToA");
      return this.a + this.age;
    },
    addToB(){
      console.log("addToB");
      return this.b + this.age;
    },
    changeClasses(){
      return {
        available:this.available,
        nearby:this.nearby
      };
    }
  }
});
