import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function CreatePost() {

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        axios.post("http://localhost:3000/create-post", formData)
        .then((res) => {

            alert("Post created successfully")
            navigate("/feed")
            e.target.reset()
        })

    }


  return (
    <section className='create-post-section min-h-screen w-full bg-gray-300 flex flex-col items-center justify-center p-5 border-8'>
        <p className="text-3xl font-serif font-semibold">Create Post</p>

        <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-4 bg-white rounded-2xl'>

            <input className="border rounded p-1" type="file" name="image" accept="image/*"/>
            <input className="rounded p-2 outline-none" type="text" name="caption" placeholder="Enter caption" required/>
            <button className="border-3 text-white font-semibold bg-green-500 w-fit self-center px-2 py-1 rounded-xl" type="submit">Submit</button>

        </form>

    </section>
  )
}
