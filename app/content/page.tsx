import { Suspense } from "react";
import Link from "next/link";

async function getBlogs() {
  const response = await fetch(
    "https://664829ba2bb946cf2f9fc3f1.mockapi.io/blog"
  );

  if (!response.ok) {
    throw new Error("cannot fetch blog");
  }

  return response.json();
}

export default async function Page() {
  const blogs = await getBlogs();
  // console.log('blogs', blogs);

  return (
    <div>
      <Suspense fallback={<p>Loading feed...</p>}>
        Blog List:
        {blogs.map((blog: any, index: number) => (
          <div key={index}>
            {blog.id} {blog.name}
            <Link href={`blog/${blog.id}`}>Go to read blog</Link>
          </div>
        ))}
      </Suspense>
    </div>
  );
}
