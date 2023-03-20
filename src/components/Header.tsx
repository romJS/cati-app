import { useRecoilState } from "recoil";
import { sidebarState } from "../store/store";
import { Button } from "./Button";

export const Header = () => {
  const [isOpen, setIsOpen] = useRecoilState(sidebarState);

  const toggleSidebarHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute h-16 bg-blue-500 w-full flex items-center px-4">
      <Button onClick={toggleSidebarHandler} toggler={true} />
    </header>
  );
};
