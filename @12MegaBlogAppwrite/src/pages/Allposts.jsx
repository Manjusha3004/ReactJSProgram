import React, {useState, useEfect} from 'react'
import appwriteService  from "../appwrite/config";
import {Container, PostCard} from "../components"


function Allpost() {
    const [post, setPost] = useState([])
    useEfect (()=>{},[])
    appwriteService.getPosts([]).then((posts) => 
    {
        if(post){
            setPost(posts.documents)
        }
    })
        
    return (
    <div className='w-full py-8'>
        <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id}>
                            <PostCard psot={post} />
                        </div>
                    ))}
                </div>

        </Container>

    </div>
  )
}

export default Allpost