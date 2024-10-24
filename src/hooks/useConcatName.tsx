import { useState } from "react";

const useConcatName = () => {
  const [userName, setUserName] = useState<string>();

  const saveUser = async () => {
    const [userLogin] = await JSON.parse(
      localStorage.getItem("loggedUser") as any
    );
    if (userLogin) {
      const concatName = userLogin.firstName.concat(" ", userLogin.lastName);
      setUserName(concatName);
    }
  };

  return { saveUser, userName };
};

export default useConcatName;
