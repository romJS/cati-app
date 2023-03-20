import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { toggleSidebarState } from "../store/store";

export const Main = () => {
  const isOpen = useRecoilValue(toggleSidebarState);

  return (
    <main
      className={`absolute inset-0 overflow-auto bg-red-500 mt-16 p-4 ease-in transition-transform ${
        isOpen ? "left-64" : "left-0"
      }`}
    >
      <Outlet />
    </main>
  );
};
