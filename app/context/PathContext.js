"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const PathContext = createContext();

export const PathProvider = ({ children }) => {
  const [path, setPath] = useState();

  const pathname = usePathname();

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <PathContext.Provider value={{ path }}>{children}</PathContext.Provider>
  );
};

export const usePathContext = () => useContext(PathContext);
