import { useState, useEffect } from 'react';

// Example 1: Fetch in a React component using useEffect
export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/collections/posts`
      );
      
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      
      const data = await response.json();
      setPosts(data.docs || data); // Payload returns data.docs for collections
    } catch (err) {
      setError(err.message);
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Example 2: Fetch in Next.js Server Component (App Router)
export async function ServerComponent() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  
  try {
    const response = await fetch(
      `${apiUrl}/api/collections/posts`,
      { cache: 'no-store' } // Don't cache, always fetch fresh
    );
    
    const data = await response.json();
    const posts = data.docs || data;

    return (
      <div>
        <h1>Posts (Server Component)</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error('Error fetching posts:', error);
    return <p>Failed to load posts</p>;
  }
}

// Example 3: Reusable fetch function (put in utils/api.js)
export async function fetchFromPayload(endpoint) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = `${apiUrl}${endpoint}`;

  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }
  
  return response.json();
}

// Usage: const posts = await fetchFromPayload('/api/collections/posts');

// Example 4: Fetch with authentication (if needed)
export async function fetchWithAuth(endpoint, token) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  const response = await fetch(`${apiUrl}${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  
  return response.json();
}