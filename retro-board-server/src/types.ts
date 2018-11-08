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

export interface Configuration {
  GA_Tracking_ID: string;
  GA_Enabled: boolean;
  DB_Use_Mongo: boolean;
  DB_Mongo_URL: string;
}
