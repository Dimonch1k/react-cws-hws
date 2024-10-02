import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { submitFeedbackAPI, selectAllPosts } from "../../slices/postsSlice";

import "../../styles/components/serverPosts/PostDetail.scss";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const post = posts.find((p) => p._id === id);
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      dispatch(submitFeedbackAPI({ postId: id, feedback })); // Use the new thunk
      setFeedback("");
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-detail">
      <div className="post-detail__content">
        <h1 className="post-detail__title">{post.title}</h1>
        <p className="post-detail__body">{post.body}</p>
      </div>

      <div className="post-detail__feedback">
        <h2>Feedback</h2>
        <form
          onSubmit={handleFeedbackSubmit}
          className="post-detail__feedback-form"
        >
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            style={{ width: "400px", height: "60px" }}
            placeholder="Write your feedback here..."
            required
          />
          <button className="post-detail__submit-btn" type="submit">
            Submit Feedback
          </button>
        </form>
      </div>

      <h2>Existing Feedbacks</h2>
      <ul className="feedbacks">
        {post.feedback &&
          post.feedback.map((f, index) => <li key={index}>{f}</li>)}
      </ul>
    </div>
  );
};

export default PostDetail;
