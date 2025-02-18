"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "Minh1404",
  });
  return <div>Page client says: {data.greeting}</div>;
};
