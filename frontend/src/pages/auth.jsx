import "../styles/authentication/auth.css";
import SignIn from "../components/authentication/sign-in";
import SignUp from "../components/authentication/sign-up";
import { useState } from "react";

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="auth">
    <div className={`auth-form ${isSignUp ? "active" : ""}`}>
      <div className="form-container">
        <SignIn />
        <SignUp />
      </div>

      <div className="switch-container">
        <div className="auth-switch">
          <div className="switch auth-left">
            <h1>Sudah punya akun?</h1>
            <p>Masuk kembali ke dunia tanaman hijau 🍀</p>
            <button className="hidden" onClick={() => setIsSignUp(false)}>
              Masuk Sekarang
            </button>
          </div>

          <div className="switch auth-right">
            <h1>Baru di sini?</h1>
            <p>Buat akun dan mulai bertanam bersama kami 🌱</p>
            <button className="hidden" onClick={() => setIsSignUp(true)}>
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Auth;
