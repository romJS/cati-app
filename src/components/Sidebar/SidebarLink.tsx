import { NavLink } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/utils";
import type { Components } from "../../types/components";

export const SidebarLink = ({ path }: Components.LinkProps) => {
  const name = path ? capitalizeFirstLetter(path) : "Home";
  return (
    <li className="block mb-4">
      <NavLink
        to={path || "/"}
        className={({ isActive }) => (isActive ? "text-white" : "")}
      >
        {name}
      </NavLink>
    </li>
  );
};
