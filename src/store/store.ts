import { atom, selector } from "recoil";

export const sidebarState = atom({
  key: "menuState",
  default: false,
});

export const toggleSidebarState = selector({
  key: "toggleMenuState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const isOpen = get(sidebarState);

    return isOpen;
  },
});
