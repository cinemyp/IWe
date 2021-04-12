import axios from "../../services/API";
import RegisterForm from "../../components/RegisterForm";
import s from "./style.module.css";
import { useHistory } from "react-router";
import { NotificationManager } from "react-notifications";

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
      avatar: avatar,
    };
    var file = new FormData();
    file.append("avatar", avatar);

    Object.entries({ ...user }).map(([key, value]) => file.append(key, value));

    console.log("file", file);
    axios
      .post("identity/register", file)
      .then((response) => {
        history.push("/");
        NotificationManager.success("Success");
      })
      .catch((error) => {
        console.log({ error });
        NotificationManager.error(error.response.data, "Error");
      });
  };

  return (
    <div className={s.root}>
      <RegisterForm onSubmit={handleClickRegisterForm} />
    </div>
  );
};

export default RegisterPage;
