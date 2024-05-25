import { headers } from 'next/headers'
import { Suspense } from "react";
import Link from "next/link";

async function getBlogs() {
    const res = await fetch('https://664829ba2bb946cf2f9fc3f1.mockapi.io/blog')
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
  }

export default async function Page() {
    const headersList: any = headers()
    const user = JSON.parse(headersList.get('user'))
    const blogs = await getBlogs()

  return (
    <div>
      <div>You are: {user?.email}</div>
      {
        blogs.map((blog: any, index: number) => (
          <div key={index}>
            {blog.name}
            <Link href={`/manage/blog/${blog.id}`}>Edit</Link>
          </div>
        ))
      }
    </div>
  );
}
