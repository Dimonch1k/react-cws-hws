import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectAllPosts } from "../../slices/postsSlice";

import "../../styles/components/serverPosts/Post.scss";

import { Modal } from "antd";

import "../../styles/pages/goodsList/Goods-List.scss";
import Post from "./Post";

const Posts = () => {
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await fetch("http://127.0.0.1:4000/api/posts");
  //       if (!response.ok) {
  //         setError("Failed to fetch posts. Please try again later.");
  //         setIsModalOpen(true);
  //         return;
  //       }
  //       const data = await response.json();
  //       setPosts(data);
  //     } catch (err) {
  //       setError("An unexpected error occurred. Please try again later.");
  //       setIsModalOpen(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  const handleOk = () => {
    setIsModalOpen(false);
    setError(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setError(null);
  };

  if (!posts) return <p>Loading posts...</p>;

  return (
    <div className="container">
      <div className="posts-list">
        {posts.map((post) => {
          return (
            <Post
              key={post._id}
              post={post}
              title={post.title}
              body={post.body}
            />
          );
        })}
        <Modal
          title="Error"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>{error}</p>
        </Modal>
      </div>
    </div>
  );
};

export default Posts;
