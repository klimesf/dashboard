import { api } from '~/Api';
import { RedditPost, RedditResponse } from '~/Api/Reddit/RedditResponse';

export const readHotPosts = async (subreddit: string, limit: number): Promise<[RedditPost]> => {
  const response = await api<RedditResponse>(`https://www.reddit.com/r/${subreddit}/hot.json?limit=${limit}`);
  return response.data.children;
};
