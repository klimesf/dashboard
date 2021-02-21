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
