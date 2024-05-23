'use client'

import { useState, useEffect } from 'react'
// import { Suspense } from 'react'
import { submitForm } from './action'

async function getBlogs() {
    const response = await fetch('https://664829ba2bb946cf2f9fc3f1.mockapi.io/blog')

    if (!response.ok) {
        throw new Error('cannot fetch blog')
    }

    return response.json()
}

export default function Page() {

    // const blogs = await getBlogs()
    // console.log('blogs', blogs);

    const [blogState, setBlogState] = useState([])

    const initBlog = async () => {
        try {
            const result = await getBlogs()
            setBlogState(result)
        } catch (error) {
            console.log('error', error);
            
        }
    }

    useEffect(() => {
        initBlog()
    }, [])

    console.log(blogState);
    
    
    return (
        <div>
            {/* <Suspense fallback={<p>Loading feed...</p>}> */}
                test page 2
                {
                    blogState.map((blog: any, index: number) => (
                        <div key={index}>
                            {blog.id} {blog.name}
                        </div>
                    ))
                }
            {/* </Suspense> */}

            <form action={submitForm}>
                Email <input name="email"></input>
                <button>Submit</button>
            </form>
            
        </div>
    )

}