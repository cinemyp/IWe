import { useHistory } from "react-router";
import LoginForm from "../../components/LoginForm";
import axiosInstance from "../../services/API";
import { NotificationManager } from "react-notifications";
import s from "./style.module.css";
import { useState } from "react";
import { CircularProgress } from "@material-ui/core";

const LoginPage = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState();

  const handleSubmitLoginForm = async ({ email, password }) => {
    const user = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    axiosInstance
      .post("identity/authenticate/", {
        ...user,
      })
      .then((response) => {
        sessionStorage.setItem("idToken", response.data);
        NotificationManager.success("Success");
        history.push("/recs");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        NotificationManager.error(error.response.data, "Error");
        console.log("error", error);
        setIsLoading(false);
      });
  };
  return (
    <div className={s.wrapper}>
      <LoginForm onSubmit={handleSubmitLoginForm} />
      {isLoading ? <CircularProgress /> : null}
    </div>
  );
};

export default LoginPage;
