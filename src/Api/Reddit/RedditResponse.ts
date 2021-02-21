import { api } from '~/Api';

export interface RedditResponse {
  readonly data: RedditData;
}

export interface RedditData {
  readonly children: [RedditPost];
}

export interface RedditPost {
  readonly data: RedditPostData;
}

export interface RedditPostData {
  readonly name: string;
  readonly permalink: string;
  readonly title: string;
}

export const readHotPosts = async (subreddit: string, limit: number): Promise<[RedditPost]> => {
  const response = await api<RedditResponse>(`https://www.reddit.com/r/${subreddit}/hot.json?limit=${limit}`);
  return response.data.children;
};
