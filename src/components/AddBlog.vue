<template>
  <div id="add-blog">
    <h2>Add a new blog post</h2>
    <form>
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required>
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content">
      </textarea>

      <div id="checkboxes">
        <label>Juyel</label>
        <input type="checkbox" value="Juyel" v-model="blog.categories">
        <label>Rana</label>
        <input type="checkbox" value="Rana" v-model="blog.categories">
        <label>Jalal</label>
        <input type="checkbox" value="Jalal" v-model="blog.categories">
        <label>Mukti</label>
        <input type="checkbox" value="Mukti" v-model="blog.categories">
      </div>

      <label>Author: </label>
      <select v-model="blog.author">
        <option v-for="(author, index) in authors">{{ author }}</option>
      </select>
      
    </form>



    <div id="preview">
      <h2>Preview Blog</h2>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="(category,index) in blog.categories" :key="index">{{ ++index }} . {{ category }}</li>
      </ul>

      <p>Author : {{ blog.author }}</p>
    </div>


  </div>
</template>

<script>
export default {
  data(){
    return {
      blog:{
        title: "",
        content: "",
        categories:[],
        author:""
      },
      authors:[
        "Md Juyel Rana", "Md Jalal Uddin", "Most Rokey Begum", "Most Mukti Khatun"
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea{
  display: block;
  width: 100%;
}
#preview{
  padding: 10px 20px;
  border:1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}

#checkboxes{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label{
  display: inline-block;
}

ul li{
  list-style: none;
}

</style>
