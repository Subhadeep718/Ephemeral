import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/addPost")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <button></button>
        <h3>Create Post</h3>
        <button>Post</button>
      </div>
      <div>
        <div></div>
        <textarea />
      </div>
    </div>
  );
}
