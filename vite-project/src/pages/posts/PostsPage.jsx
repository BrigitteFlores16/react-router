import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${apiUrl}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [apiUrl]);

  const handleViewPost = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <div>
      <h1>Lista dei Post</h1>
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th scope="col">Preview</th>
            <th scope="col">Nome</th>
            <th scope="col">Disponibile</th>
            <th scope="col">Ingredienti</th>
            <th scope="col">Azioni</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>
                <img
                  src={`${apiUrl}${post.image}`}
                  alt={post.name}
                  width="60"
                />
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
                    className="btn btn-primary py-1 px-2 me-2"
                    onClick={() => handleViewPost(post.id)}
                  >
                    <span class="material-icons">&#xE87C;</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
