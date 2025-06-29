import { useState } from "react";

function SignUp() {
const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="form sign-up">
      <form>
        <h1>Buat Akun Baru</h1>
        <div className="google-account">
          <a href="#">
            <i className="fa-brands fa-google"></i> Mendaftar dengan Google
          </a>
        </div>
        <span>atau gunakan email Anda untuk mendaftar</span>
        <input type="text" name="name" placeholder="Nama Lengkap" />
        <input type="email" name="email" placeholder="Email" />
        <div className="password">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Kata Sandi"
          />
          <i
            className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
            onClick={() => setShowPassword(!showPassword)}
          ></i>
        </div>
        <div className="password">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Konfirmasi Kata Sandi"
          />
          <i
            className={`fa ${showConfirm ? "fa-eye" : "fa-eye-slash"}`}
            onClick={() => setShowConfirm(!showConfirm)}
          ></i>
        </div>
        <button>Daftar</button>
      </form>
    </div>
  );
}

export default SignUp;
