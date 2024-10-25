export type IUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type SidebarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UserProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  addNewUser: (newUser: IUser) => void;
  removeUser: (email: string) => void;
};
