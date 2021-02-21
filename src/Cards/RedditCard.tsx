import * as React from 'react';
import { readHotPosts, RedditPost } from '~/Api/Reddit';

const getRedditLink = (post: RedditPost) => `https://reddit.com${post.data.permalink}`;

export const RedditCard: React.FunctionComponent<{subreddit: string}> = ({subreddit}) => {
  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState<RedditPost[]>([]);

  const loadPosts = async () => {
    setLoading(true);
    const freshPosts = await readHotPosts(subreddit, 10);
    setPosts(freshPosts);
    setLoading(false);
  };

  React.useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className='card f1'>
      <h3>/r/{subreddit}</h3>
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
