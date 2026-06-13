import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Feed() {

    const [posts, setPosts] = useState([
        {
            _id:"1",
            image:"https://ik.imagekit.io/shourya87/image-1781203841332_AmGBraU80.jpg?updatedAt=1781203843456",
            caption:"Beautiful radhakrishn"
        }
    ])

    useEffect(() => {
        axios.get("http://localhost:3000/posts")
        .then((res) => {
            setPosts(res.data.posts)
        })
    }, [])


  return (
    <section className="min-h-screen w-full flex flex-col justify-start items-center gap-5 bg-[#f0f2f5] p-5">

        <h1>Feed</h1>

        {
            posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className="bg-white p-5 border-8 w-100 mb-5" >
                        <img src={post.image} alt={post.image} />
                        <h2 className="mb-2.5">{post.caption}</h2>
                    </div>
                ))
                ) : (
                    <h1>No posts available</h1>
                )
        }

    </section>
  )
}
