"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type IUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
interface UserProps {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  addNewUser: (newUser: IUser) => void;
  removeUser: (email: string) => void;
}

export const UserContext = createContext<UserProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState<IUser[]>([]);

  const addNewUser = (newUser: IUser) => {
    if (users.length === 0) {
      setUsers([newUser]);
    } else {
      setUsers([...users, newUser]);
    }
  };

  const removeUser = (email: string) => {
    const newUser = users.filter((item) => item.email !== email);
    setUsers(newUser);
  };

  return (
    <UserContext.Provider
      value={{
        userName,
        users,
        setUsers,
        setUserName,
        addNewUser,
        removeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserContext deve ser usado dentro de um UserProvider");
  }
  return context;
};
