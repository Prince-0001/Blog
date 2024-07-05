import React, { useEffect, useState } from 'react'
import service from '../appwrite/Config'
import { Container,PostCard } from '../components/index'
import { useSelector } from 'react-redux'

function Home() {
    const[posts,setPosts]=useState([])
    const userStatus=useSelector(state=>state.status)

    useEffect(()=>{
        service.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])
  if(posts.length===0&&userStatus){
    return (
        <div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            No Post
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    )
  }
  else if(posts.length===0){
    return (
        <div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            Please Login to upload Post
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    )
  }
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
)
}

export default Home
