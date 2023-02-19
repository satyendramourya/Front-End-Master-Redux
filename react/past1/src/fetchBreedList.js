const fetchBreedList = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  if (!apiRes.ok) {
    throw new Error(`details/${id} Error fetching pet`);
  }
  return apiRes.json();
};

export default fetchBreedList;
