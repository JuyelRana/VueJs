<template>
  <div>
    <!-- <AddBlog></AddBlog> -->
    <ShowBlogs></ShowBlogs>
    <ListBlog></ListBlog>
  </div>
</template>

<script>

import AddBlog from './components/AddBlog';
import ShowBlogs from './components/ShowBlogs';
import ListBlog from './components/ListBlog';

export default {
  components:{
    'AddBlog':AddBlog,
    'ShowBlogs':ShowBlogs,
    'ListBlog':ListBlog,
  },
  data(){
    return {

    }
  }
}
</script>

<style>

</style>
