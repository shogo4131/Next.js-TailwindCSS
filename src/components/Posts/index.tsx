import React, { useCallback, useEffect, useReducer } from 'react';

import { InitialState, ActionType } from '../../types/posts';

const initialState: InitialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state: InitialState, action: ActionType) => {
  switch (action.type) {
    case 'END':
      return {
        ...state,
        data: action.data,
        loading: false,
      };

    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      throw new Error('エラーが発生したためデータが表示されませんでした');
  }
};

export const Posts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');

      if (!res.ok) {
        throw new Error('エラーが発生したためデータが表示されませんでした');
      }

      const resData = await res.json();

      dispatch({ type: 'END', data: resData });
    } catch (error) {
      dispatch({ type: 'ERROR', error: error });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loading) {
    return <p>ローディング中</p>;
  }

  if (state.error) {
    return <p>{state.error.message}</p>;
  }

  if (state.data.length === 0) {
    return <p>表示できるデータがありませんでした</p>;
  }

  return (
    <ol>
      {state.data.map(({ id, body }) => (
        <li key={id}>{body}</li>
      ))}
    </ol>
  );
};
