export const fetchData = async (endpoint) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
  if (!response.ok) throw new Error('Failed to fetch');
  return await response.json();
};