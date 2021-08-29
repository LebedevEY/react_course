import { Link } from "react-router-dom";
import { firebaseApp } from "../api/firebase";
import { AuthTemplate, AuthForm } from "../components";

const onSubmit = (email, password) => {
  return firebaseApp.auth().signInWithEmailAndPassword(email, password);
};

export function SignIn() {
  return (
    <AuthTemplate
      link={<Link to="sign_up">Нет аккаунта? Зарегистрироваться</Link>}
    >
      <AuthForm title="Авторизация" onSubmit={onSubmit} submitButton="Войти" />
    </AuthTemplate>
  );
}
