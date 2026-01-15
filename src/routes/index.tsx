import { createFileRoute } from "@tanstack/react-router";
import Post from "../components/UI/Post";
// import Post from "../components/UI/Post";

export const Route = createFileRoute("/")({
  component: () => (
    <h1>
      <Home />
    </h1>
  ),
});

const Home = () => {
  return (
    <div>
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <Post key={index} />
        ))}
    </div>
  );
};
