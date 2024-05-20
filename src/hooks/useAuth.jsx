import { useContext } from "react";
import { UserContext } from "./../provider/AuthProvider/AuthProvider";

const useAuth = () => {
  return useContext(UserContext);
};

export default useAuth;
