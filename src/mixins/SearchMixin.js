export default{
  computed:{
    filterBlogs(){
      return this.blogs.filter((blog) => {
        return blog.content.match(this.search) || blog.title.match(this.search);
      });
    }
  },
}
