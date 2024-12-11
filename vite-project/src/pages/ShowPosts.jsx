import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ShowPost() {
  const { id: postId } = useParams();
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost(postId);
  }, [postId]);

  const fetchPost = (id) => {
    const url = `${apiUrl}/posts/${id}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) {
            navigate("/not-found");
          }
          throw new Error("oooops! Qualcosa è andato storto");
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      {post && (
        <>
          <h1 className="mt-5">{post.name}</h1>
          <div className="row g-3">
            <div className="col-6">
              <img
                src={`${apiUrl}${post.image}`}
                className="img-fluid"
                alt={post.name}
              />
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <strong>Disponibile:</strong>{" "}
                  {postMessage.available ? (
                    <i className="fa-solid fa-check text-success" />
                  ) : (
                    <i ClassName="fa-solid fa-cross text-success" />
                  )}
                </li>
                <li>
                  <strong>Descrizione:</strong> {post.description}
                </li>
                <li>
                  <strong>Ingredienti:</strong>
                  <ul>
                    {post.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
