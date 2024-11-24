


'use client';

import React, { useEffect, useState } from 'react';
import PostCard from '../../components/PostCard';




// Define the Post type
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const FetchPostPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch('/api/external')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPosts(data.data);
        } else {
          setError('Failed to load posts');
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default FetchPostPage;
