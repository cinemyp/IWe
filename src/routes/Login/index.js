import { useHistory } from "react-router";
import LoginForm from "../../components/LoginForm";
import axiosInstance from "../../services/API";
import s from "./style.module.css";

const LoginPage = () => {
  const history = useHistory();
  const handleSubmitLoginForm = async ({ email, password }) => {
    const user = {
      email: email,
      password: password,
    };
    axiosInstance
      .post("identity/authenticate/", {
        ...user,
      })
      .then((response) => {
        sessionStorage.setItem("idToken", response.data);
        history.push("/recs");
      })
      .then((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className={s.wrapper}>
      <LoginForm onSubmit={handleSubmitLoginForm} />
    </div>
  );
};

export default LoginPage;
