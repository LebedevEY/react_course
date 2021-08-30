import { Link } from "react-router-dom";
import { firebaseApp } from "../api/firebase";
import { AuthTemplate, AuthForm } from "../components";

const onSubmit = (email, password) => {
  return firebaseApp.auth().createUserWithEmailAndPassword(email, password);
};

export function SignUp() {
  return (
    <AuthTemplate link={<Link to="sing_in">Есть аккаунт? Войти</Link>}>
      <AuthForm
        title="Регистация"
        submitButton="Зарегистрироваться"
        onSubmit={onSubmit}
      />
    </AuthTemplate>
  );
}
