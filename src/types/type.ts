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
 * https://jsonplaceholder.typicode.com/users
 */
export interface UserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

/**
 * https://jsonplaceholder.typicode.com/comments
 */
export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
