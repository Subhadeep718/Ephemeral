import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/addPost")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/addPost"!</div>;
}
