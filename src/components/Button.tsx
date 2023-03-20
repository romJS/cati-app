import { useState } from "react";
import type { Components } from "../types/components";

export const Button = ({
  onClick,
  name = "Open Navigation",
  toggleName = "Close Navigation",
  toggler = false,
  ...rest
}: Components.ButtonProps) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <button
      className="border border-white px-4 py-2 text-white"
      onClick={() => {
        toggler && setIsToggled(!isToggled);
        onClick && onClick();
      }}
      role="button"
      type="button"
      {...rest}
    >
      {isToggled && toggler ? toggleName : name}
    </button>
  );
};
