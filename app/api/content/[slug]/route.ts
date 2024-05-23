export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug // 'a', 'b', or 'c'
  return Response.json({
    name: 'andy',
    id: params.slug
  })
}