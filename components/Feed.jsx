"use client";
import { useState } from "react";
import Post from "./Post";

const Feed = () => {
  const [posts] = useState([
    {
      id: 1,
      user: {
        name: "John Doe",
        title: "Software Engineer",
        avatar: "/images/user.svg",
      },
      content: "This is a sample post content.",
      image: "/path/to/post-image.jpg",
    },
    {
      id: 2,
      user: {
        name: "Jane Smith",
        title: "Product Manager",
        avatar: "/images/user.svg",
      },
      content: "Another sample post content.",
    },
  ]);

  return (
    <div className="container mx-auto p-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
