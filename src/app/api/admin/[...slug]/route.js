export async function GET(request, { params }) {
  const slug = params.slug.join('/');
  const backendUrl = `${process.env.NEXT_PUBLIC_PAYLOAD_API}/admin/${slug}`;

  const response = await fetch(backendUrl, {
    headers: request.headers,
  });

  return response;
}

export async function POST(request, { params }) {
  const slug = params.slug.join('/');
  const backendUrl = `${process.env.NEXT_PUBLIC_PAYLOAD_API}/admin/${slug}`;
  const body = await request.text();

  const response = await fetch(backendUrl, {
    method: 'POST',
    headers: request.headers,
    body: body,
  });

  return response;
}