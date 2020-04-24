<template>
  <div>
    <!-- <AddBlog></AddBlog> -->
    <ShowBlogs></ShowBlogs>
  </div>
</template>

<script>

import AddBlog from './components/AddBlog';
import ShowBlogs from './components/ShowBlogs';

export default {
  components:{
    'AddBlog':AddBlog,
    'ShowBlogs':ShowBlogs
  },
  data(){
    return {

    }
  }
}
</script>

<style>

</style>
