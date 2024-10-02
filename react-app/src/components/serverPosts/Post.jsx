import { useNavigate } from "react-router-dom";

import "../../styles/components/serverPosts/Post.scss";

const Post = ({ post, title, body }) => {
  const navigate = useNavigate();
  const openPost = (post) => navigate(`/posts/${post._id}`);

  return (
    <div className="post" onClick={() => openPost(post)}>
      <p className="post__title">{title}</p>
      <hr />
      <p className="post__body">{body}</p>
    </div>
  );
};

export default Post;
