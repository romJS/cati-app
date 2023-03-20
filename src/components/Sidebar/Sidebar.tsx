import { useRecoilValue } from "recoil";
import { toggleSidebarState } from "../../store/store";
import { SidebarLink } from "./SidebarLink";
import { sidebarRoutes } from "../../router/router";

export const Sidebar = () => {
  const isOpen = useRecoilValue(toggleSidebarState);

  return (
    <nav
      className={`absolute top-16 bottom-0 w-64 bg-yellow-500 p-4 ease-in transition-transform ${
        isOpen ? "" : "translate-x-[-100%]"
      }`}
    >
      <ul>
        {sidebarRoutes
          ? sidebarRoutes.map((route, index) => (
              <SidebarLink path={route.path} key={index} />
            ))
          : null}
      </ul>
    </nav>
  );
};
