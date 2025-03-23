"use client";

import { DEFAULT_LIMIT } from "@/constants";
import { trpc } from "@/trpc/client";

interface SuggestionSectionProps {
  videoId: string;
}

export const SuggestionSection = ({ videoId }: SuggestionSectionProps) => {
  const [suggestions] = trpc.suggestions.getMany.useSuspenseInfiniteQuery(
    {
      videoId,
      limit: DEFAULT_LIMIT,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
  return <div>{JSON.stringify(suggestions.pages[0].items[0])}</div>;
};
