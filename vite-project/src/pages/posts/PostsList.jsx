import { useContext } from "react";
import { PostsContext } from "../PostsContext";
import PostCard from "./PostCard";

export default function PostsList() {
  const { posts } = useContext(PostsContext);

  return (
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
          <PostCard key={post.id} post={post} />
        ))}
      </tbody>
    </table>
  );
}
