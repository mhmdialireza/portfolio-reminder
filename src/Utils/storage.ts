const storagePrefix = "user_";

const storage = {
  clearAll: () => {
    Object.keys(localStorage).forEach((key) => localStorage.removeItem(key));
  },

  getToken: () => {
    return JSON.parse(
      window.localStorage.getItem(`${storagePrefix}token`) as string
    );
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
};

export default storage;
