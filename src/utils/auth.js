export const isAuthenticated = () => {
  return localStorage.getItem("animeworld_user") !== null;
};

export const loginUser = (email, password) => {
  const user = JSON.parse(localStorage.getItem("animeworld_user"));
  if (!user) return false;
  return user.email === email && user.password === password;
};

export const registerUser = (data) => {
  localStorage.setItem("animeworld_user", JSON.stringify(data));
};

export const logoutUser = () => {
  localStorage.removeItem("animeworld_user");
};
