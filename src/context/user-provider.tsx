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
  addStorage: (key: string, value: IUser) => void;
  removeStorage: (key: string, value: string) => void;
  checkEmailInStorage: (value: string) => Promise<boolean>;
  loginValidation: (email: string) => Promise<{
    checkedUser: IUser[] | [];
  }>;
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

  useEffect(() => {
    const showStorage = () => {
      const checkStorage = localStorage.getItem("trybetunes-users");

      if (!checkStorage) {
        localStorage.setItem("trybetunes-users", JSON.stringify([]));
      } else {
        const storedUsers = JSON.parse(
          localStorage.getItem("trybetunes-users") as any
        );
        setUsers(storedUsers);
      }
    };
    showStorage();
  }, []);

  const addStorage = (key: string, value: IUser) => {
    const storage = JSON.parse(localStorage.getItem(key) as string);
    storage?.push(value);
    localStorage.setItem(key, JSON.stringify(storage));
  };

  const checkEmailInStorage = async (value: string) => {
    const storedUsers = await JSON.parse(
      localStorage.getItem("trybetunes-users") as any
    );
    const checkedUser: boolean = storedUsers.find(
      (user: any) => user.email === value
    );
    return checkedUser;
  };

  const loginValidation = async (email: string) => {
    const storedUsers: IUser[] = await JSON.parse(
      localStorage.getItem("trybetunes-users") as any
    );

    const checkedUser: IUser[] = storedUsers.filter(
      (user: any) => user.email === email
    );

    return { checkedUser };
  };

  const removeStorage = (key: string, value: string) => {
    const checkStorage = JSON.parse(localStorage.getItem(key) as any);
    const newStorage = checkStorage?.filter(
      (item: IUser) => item.email !== value
    );
    localStorage.setItem(key, JSON.stringify(newStorage));
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
        addStorage,
        checkEmailInStorage,
        removeStorage,
        loginValidation,
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
