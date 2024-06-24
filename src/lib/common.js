export function storeInLocalStorage(token, userId, valid) {
  localStorage.setItem("token", token);
  localStorage.setItem("userId", userId);
  localStorage.setItem("valid", valid);
}

export function getFromLocalStorage(item) {
  return localStorage.getItem(item);
}

export async function getAuthenticatedUser() {
  const defaultReturnObject = { authenticated: false, user: null };
  try {
    const token = getFromLocalStorage("token");
    const userId = getFromLocalStorage("userId");
    if (!token) {
      return defaultReturnObject;
    } else {
      return { authenticated: true, user: { userId, token } };
    }
  } catch (err) {
    console.error("getAuthenticatedUser, Something Went Wrong", err);
    return defaultReturnObject;
  }
}
