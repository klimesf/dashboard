import * as React from 'react';
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

const readPosts = async (): Promise<[RedditPost]> => {
  const response = await api<RedditResponse>('https://www.reddit.com/r/formula1/hot.json?limit=10');
  return response.data.children;
};

const getRedditLink = (post: RedditPost) => `https://reddit.com${post.data.permalink}`;

export const RedditF1Card: React.FunctionComponent = () => {
  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState<RedditPost[]>([]);

  const loadPosts = async () => {
    setLoading(true);
    const freshPosts = await readPosts();
    setPosts(freshPosts);
    setLoading(false);
  };

  React.useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className='card f1'>
      <h3>/r/formula1</h3>
      <button onClick={() => { loadPosts(); }}>refresh</button>
      <hr/>
      {loading
        ? <p className='loading'>Loading...</p>
        : <ul>
            {posts.map((post) => (
              <li key={post.data.name}>
                <a href={getRedditLink(post)} target='_blank'>
                  {post.data.title}
                </a>
              </li>
            ))}
          </ul>
      }
    </div>
  );
};
