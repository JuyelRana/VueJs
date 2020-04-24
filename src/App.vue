<template>
  <div>
    <AppHeader/>
    <router-view/>
  </div>
</template>

<script>

import AddBlog from './components/AddBlog';
import ShowBlogs from './components/ShowBlogs';
import ListBlog from './components/ListBlog';
import Header from './components/Header';

export default {
  components:{
    'AddBlog':AddBlog,
    'ShowBlogs':ShowBlogs,
    'ListBlog':ListBlog,
    'AppHeader' : Header
  },
  data(){
    return {

    }
  }
}
</script>

<style>

</style>
