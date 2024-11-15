import { create } from "zustand";
import { User } from "../types/stores";

type Store = {
  user: User;
  setUser: (newUser: User) => void;
};

export const useStore = create<Store>()((set) => ({
  user: { id: 0, username: "", password: "", tasks: [], role: "" },
  setUser: (newUser) => set({ user: newUser }),
}));
