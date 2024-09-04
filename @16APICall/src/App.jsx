import { useEffect, useState } from 'react'
import './App.css'
import PostComponent from './components/PostComponent'

function App() {
  const [page, setPage] = useState(1);
  const [post, setPost] = useState([])

  useEffect(() => {
    fetchPosts();
  }, [])
  const fetchPosts = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${page}`);
    const posts = await res.json();
    setPost(posts)
  }
  const handlePageChange = (e) => {
      setPage(e.target.value);
  }
const handleSubmit = () => {
  fetchPosts();
}

  console.log('posts',post)
  return (
      <PostComponent 
      data={post} 
      value={page}
      handlePageChange = {handlePageChange}
      handleSubmit = {handleSubmit}

      />
    )
}

export default App
