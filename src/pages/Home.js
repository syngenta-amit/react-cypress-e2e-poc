import React, { useEffect, useState } from 'react';
import { fetchData } from '../api';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData('posts?_limit=3').then(setPosts);
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;