export default function ({ store, redirect }) {
    if (process.client && !store.getters["getIsAuth"]) return redirect("/auth");
  }
