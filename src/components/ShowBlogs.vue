<template>
  <div id="show-blogs" v-theme:column="'middle'">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search Box">
    <div class="single-blog" v-for="(blog, index) in filterBlogs">
      <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      blogs:[],
      search:""
    }
  },
  methods:{
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
      this.blogs = response.body.slice(10,100);
    });
  },
  computed:{
    filterBlogs(){
      return this.blogs.filter((blog) => {
        return blog.body.match(this.search) || blog.title.match(this.search);
      });
    }
  },
  filters:{
    toUppercase(value){
      return value.slice(0,50).toUpperCase()+"...";
    },
    snippet(value){
      return value.slice(0,110)+"....";
    }
  },
  directives:{
    rainbow:{
      bind(el, binding, vnode){
        el.style.color = "#"+Math.random().toString().slice(2,8);
      }
    },
    theme:{
      bind(el,binding,vnode){
        if(binding.value == 'wide'){
          el.style.maxWidth = "1200px";
        }else if (binding.value == 'narrow') {
          el.style.maxWidth = "560px";
        }else if (binding.value == 'middle') {
          el.style.maxWidth = '800px';
        }

        if(binding.arg == 'column'){
          el.style.background = '#ddd';
          el.style.padding = '20px';
        }
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
