export const fetcher = async (input: RequestInfo, init?: RequestInit) => {
  const res = await fetch(input, init);

  if (!res.ok) {
    throw new Error('エラーが発生したため、データを表示できません');
  }

  return res.json();
};
