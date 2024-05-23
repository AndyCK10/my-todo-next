import { Suspense } from "react";

async function getBlog(slug: string) {
  const response = await fetch(
    `https://664829ba2bb946cf2f9fc3f1.mockapi.io/blog/${slug}`
  );

  if (!response.ok) {
    throw new Error("cannot fetch blog");
  }

  return response.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);
  // console.log('blogs', blogs);

  return (
    <div>
      <div>
        ID: {blog.id}
        <div>Name: {blog.name}</div>
        <div>Description: {blog.description}</div>
      </div>
    </div>
  );
}
