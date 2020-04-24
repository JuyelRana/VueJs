import ShowBlogs from './components/ShowBlogs'
import ListBlog from './components/ListBlog'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'

export default[
{path: '/', component:ShowBlogs},
{path: '/list', component:ListBlog},
{path: '/add', component:AddBlog},
{path: '/blog/:id', component:SingleBlog},
]
