export interface Session {
  id: string;
  name: string;
  posts: Post[];
}

export interface Post {
  id: string;
  postType: string;
  content: string;
  user: string;
  likes: string[];
  dislikes: string[];
}

export interface Store {
  get: (key: string) => Promise<any>;
  set: (obj: any) => Promise<{}>;
}
