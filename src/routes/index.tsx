import { createFileRoute } from "@tanstack/react-router";
import Post from "../components/UI/Post";

export const Route = createFileRoute("/")({
  component: () => <Post />,
});
