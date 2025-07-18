import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
  return { ...params };
}

export default function Page() {
  const params = useLoaderData<typeof loader>();

  return (
    <>
      <h2>Post</h2>
      <h2>Title: {params.post}</h2>
    </>
  );
}
