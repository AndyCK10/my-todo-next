'use client'

import { useState, useEffect } from 'react'

export default function Page({ params }: { params: { slug: string }} ) {
  const [blogState, setBlogState] = useState({
    name: '',
    content: '',
    imageUrl: '',
    author: '',
    description: ''
  })

  const getBlog = async (slug: string) => {
    try {
      const res = await fetch(`https://664829ba2bb946cf2f9fc3f1.mockapi.io/blog/${slug}`)
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
      const result = await res.json()
      setBlogState(result)
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setBlogState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Form Submitted', blogState)
    try {
      const response = await fetch(`https://664829ba2bb946cf2f9fc3f1.mockapi.io/blog/${params.slug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogState)
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const responseData = await response.json()
      console.log('Form submitted successfully', responseData)
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  useEffect(() => {
    getBlog(params.slug)
  }, [params.slug])

  return (
    <div>
      My Post: {params.slug}
      <div>
        Blog detail 
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={blogState.name}
              onChange={handleChange}
            />
          </div>

          <button>Update</button>
        </form>
      </div>
    </div>
  )
}