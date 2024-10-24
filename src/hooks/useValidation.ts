import { useEffect, useState } from "react";

type IUser = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

const useValidation = () => {
  const [usersData, setUsersData] = useState<IUser[] | [] >();

    useEffect(() => {
      const showStorage = () => {
        const checkStorage = localStorage.getItem("trybetunes-users");

        if (!checkStorage) {
          localStorage.setItem("trybetunes-users", JSON.stringify([]));
        } else {
          const storedUsers = JSON.parse(
            localStorage.getItem("trybetunes-users") as any
          );
          setUsersData(storedUsers);
        }
      };
      showStorage();
    }, []);
   
      const loginValidation = async (email: string, password: string) => {
        const filteredUser = usersData?.filter((user: IUser) => user.email === email);
        const checkedUser = usersData?.some((user: IUser) => user.email === email);
        const checkedPwd = filteredUser?.some((user: IUser) => user.password === password);

        return {checkedUser, checkedPwd, filteredUser};
      };

  return { loginValidation }
}

export default useValidation;