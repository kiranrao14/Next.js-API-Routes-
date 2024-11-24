
'use client'
import { useState, useEffect } from "react";
import PostCard from "../../components/PostCard";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/external");
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setPosts(data.data); // Make sure 'data.data' matches your API response structure
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Proper type-safe handling of the error
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center p-4 bg-slate-600 font-black">
        Loading......
      </div>
    );
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">{error}</div>;
  }

  return (
    <>
      <h1 className="bg-black text-3xl font-extrabold p-4 text-white flex justify-center">
        Posts
      </h1>
      <div className="bg-slate-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-8">
        {posts.map((post) => (
          <PostCard key={post.id} body={post.body} title={post.title} id={post.id} />
        ))}
      </div>
    </>
  );
}
