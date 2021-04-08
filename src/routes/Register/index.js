import axios from "../../services/API";
import RegisterForm from "../../components/RegisterForm";
import s from "./style.module.css";
import { useHistory } from "react-router";

const RegisterPage = () => {
  const history = useHistory();
  const handleClickRegisterForm = async ({
    name,
    email,
    password,
    avatar,
    gender,
  }) => {
    const user = {
      firstname: name,
      email: email,
      password: password,
      genderid: gender,
      interestedingenderid: gender === 0 ? 1 : 0,
    };
    axios
      .post("identity/register", { ...user })
      .then((response) => {
        history.push("/");
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className={s.root}>
      <h1>Создать аккаунт</h1>
      <RegisterForm onSubmit={handleClickRegisterForm} />
    </div>
  );
};

export default RegisterPage;
