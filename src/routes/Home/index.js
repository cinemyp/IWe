import LoginForm from "../../components/LoginForm";
import axiosInstance from "../../services/API";
import s from "./style.module.css";

const handleSubmitLoginForm = async ({ username, password, auth }) => {
  const user = {
    username: username,
    password: password,
    firstname: "firstname",
    lastname: "lastname",
    genderid: 0,
    interestedingenderid: 1,
    gender: {
      id: 0,
      name: "male",
    },
  };
  axiosInstance
    .post("identity/" + (auth === "reg" ? "register" : "authenticate"), {
      ...user,
    })
    .then((response) => {
      console.log("response", response);
      sessionStorage.setItem("idToken", response.data);
    })
    .then((error) => {
      console.log("error", error.message);
    });
};

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <LoginForm onSubmit={handleSubmitLoginForm} />
    </div>
  );
};

export default HomePage;
