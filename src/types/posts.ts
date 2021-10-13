/**
 * https://jsonplaceholder.typicode.com/posts
 */
export interface PostList {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/**
 * API初期 State
 */
export interface InitialState {
  type?: string;
  data: PostList[];
  loading: boolean;
  error: unknown;
}

/**
 * Action Type
 */
export interface ActionType {
  type: 'END' | 'ERROR';
  data: PostList[];
  error?: unknown;
}
