import { useCallback, useState } from "react";

export default function useMenuController() {
  const [open, setOpen] = useState(false);

  const toggleMenu = useCallback(() => setOpen((isOpen) => !isOpen), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  return { open, toggleMenu, closeMenu };
}
