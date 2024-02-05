
export const getToken = () => localStorage.getItem("token");


export const isTokenValid = () => {
  const token = getToken();
  // You can add additional logic to check token validity, expiration, etc.
  return !!token;
};