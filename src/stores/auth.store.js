import { defineStore } from "pinia";

import { fetchWrapper } from "src/helpers";
import { Router } from 'src/router'

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;
export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("user")),
    returnUrl: null,
  }),
  actions: {
    async login(username, password) {
      const user = await fetchWrapper.post(`${baseUrl}/authenticate`, {
        username,
        password,
      });

      // update pinia state
      this.user = user;

      // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem("user", JSON.stringify(user));

      // redirect to previous url or default to home page
      Router.push(this.returnUrl || "/");
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      Router.push("/login");
    },
  },
});
