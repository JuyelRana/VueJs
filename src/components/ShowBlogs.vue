<template>
  <div id="show-blogs" v-theme:column="'narrow'">
    <h1>All Blog Articles</h1>
    <div class="single-blog" v-for="(blog, index) in blogs">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      blogs:[]
    }
  },
  methods:{
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
      this.blogs = response.body.slice(10,100);
    });
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
  background: #eeeccc;
}
</style>
