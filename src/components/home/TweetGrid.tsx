"use client";

import { Component } from "react";
import { TweetProps, useTweet } from "react-tweet";
import { tweetIds } from "@/config/infoConfig";

import {
  MagicTweet,
  TweetNotFound,
  TweetSkeleton,
} from "@/components/home/TweetCard";



export const ClientTweetCard = ({
  id,
  apiUrl,
  fallback = <TweetSkeleton />,
  components,
  fetchOptions,
  onError,
  ...props
}: TweetProps & { className?: string }) => {
  const { data, error, isLoading } = useTweet(id, apiUrl, fetchOptions);

  if (isLoading) return fallback;
  if (error || !data) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound error={onError ? onError(error) : error} />;
  }

  return <MagicTweet tweet={data} components={components} {...props} />;
};

class TweetErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

export const TweetGrid = () => {
  return (
    <div className="grid lg:hidden columns-1 sm:columns-2 lg:columns-3 gap-4">
      {tweetIds.map((id) => (
        <TweetErrorBoundary key={id}>
          <ClientTweetCard id={id} className="shadow-xl mb-4 break-inside-avoid"/>
        </TweetErrorBoundary>
      ))}
    </div>
  );
};

