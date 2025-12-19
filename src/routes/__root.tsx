import { createRootRoute } from "@tanstack/react-router";

import LayoutWrap from "../components/Layout/LayoutWrap";

export const Route = createRootRoute({
  component: () => <LayoutWrap />,
});
