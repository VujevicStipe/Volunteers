import React, { createContext, useState, useContext, useEffect } from "react";

type RoleContextType = {
  role: string;
  setRole: React.Dispatch<React.SetStateAction<"user" | "admin">>;
};

export const RoleManagerContext = createContext<RoleContextType | null>(null);

export const useRoleManager = () => {
  const roleManager = useContext(RoleManagerContext);

  if (!roleManager) {
    throw new Error("Role context is not defined");
  }

  return roleManager;
};

export const RoleManagerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [role, setRole] = useState<"user" | "admin">("user");

  return (
    <>
      <RoleManagerContext.Provider value={{ role, setRole }}>
        {children}
      </RoleManagerContext.Provider>
    </>
  );
};
