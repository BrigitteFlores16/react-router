import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostsContext } from "../PostsContext";

export default function PostCard({ post }) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { posts, setPosts } = useContext(PostsContext);

  const handleViewPost = (id) => {
    navigate(`/post/${id}`);
  };

  const confirmDelete = (post) => {
    if (confirm(`vuoi eliminare il post "${post.name}"?`)) {
      fetch(`${apiUrl}/posts/${post.id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Errore eliminazione del post");
          }
          const updatedPosts = posts.filter((p) => p.id !== post.id);
          setPosts(updatedPosts);
          console.log(`Post "${post.name}" eliminato con successo`);
        })
        .catch((error) => {
          console.error("Errore:", error);
        });
    }
  };

  return (
    <tr>
      <td>
        <img src={`${apiUrl}${post.image}`} alt={post.name} width="60" />
      </td>
      <td>{post.name}</td>
      <td>{post.published ? "Sì" : "No"}</td>
      <td>
        {post.ingredients.map((ingredient, index) => (
          <span key={index} className="badge text-bg-secondary ms-1">
            {ingredient}
          </span>
        ))}
      </td>
      <td>
        <div className="button-container">
          <button
            className="btn btn-danger btn-sm"
            onClick={() => confirmDelete(post)}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
          <button
            className="btn btn-primary ms-2"
            onClick={() => handleViewPost(post.id)}
          >
            <i className="fa fa-eye"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}
