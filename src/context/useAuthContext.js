import AuthContext from "./AuthContext";

const useAuthContext = () => {
  const user = useAuthContext(AuthContext);
  if (user === undefined) {
    throw new Error("useAuthContext can only be used inside AuthProvider");
  }
  return user;
};

export default useAuthContext;
