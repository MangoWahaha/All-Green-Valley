import { useState } from "react";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Kata sandi tidak cocok!");
    return;
  }

  const response = await fetch("/api/auth", {
    method: "POST",
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();
  if (response.ok) {
    history.push('/home');
  } 
  alert(result);
  setFormData({ name: "", email: "", password: "", confirmPassword: "" });
};

  return (
    <div className="form sign-up">
      <form onSubmit={handleSubmit}>
        <h1>Buat Akun Baru</h1>
        <div className="google-account">
          <a href="#">
            <i className="fa-brands fa-google"></i> Mendaftar dengan Google
          </a>
        </div>
        <span>atau gunakan email Anda untuk mendaftar</span>

        <input
          type="text"
          name="name"
          placeholder="Nama Lengkap"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="password">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Kata Sandi"
            value={formData.password}
            onChange={handleChange}
          />
          <i
            className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
            onClick={() => setShowPassword(!showPassword)}
          ></i>
        </div>
        <div className="password">
          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            placeholder="Konfirmasi Kata Sandi"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <i
            className={`fa ${showConfirm ? "fa-eye" : "fa-eye-slash"}`}
            onClick={() => setShowConfirm(!showConfirm)}
          ></i>
        </div>
        <button type="submit">Daftar</button>
      </form>
    </div>
  );
}

export default SignUp;
