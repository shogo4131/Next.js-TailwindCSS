import { useState, useCallback } from 'react';

export const useCounter = () => {
  const [state, setState] = useState(0);

  const clickAddCounter = useCallback(() => {
    setState((prev) => (prev < 10 ? ++prev : 0));
  }, []);

  const clickDescriptionCounter = useCallback(() => {
    setState((prev) => (prev > 0 ? --prev : 0));
  }, []);

  return { state, clickAddCounter, clickDescriptionCounter };
};
