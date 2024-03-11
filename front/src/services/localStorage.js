export const addUserLocal = (email, password) => {
  const user = { email, password };
  localStorage.setItem('user', JSON.stringify(user));
}