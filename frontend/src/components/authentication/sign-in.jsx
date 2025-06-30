import { useState } from "react";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new URLSearchParams();
    data.append("email", formData.email);
    data.append("password", formData.password);

    const response = await fetch("/signin", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const text = await response.text();
    setMessage(text);
  };

  return (
    <div className="form sign-in">
      <form onSubmit={handleSubmit}>
        <h1>Masuk ke Akun Anda</h1>
        <div className="google-account">
          <a href="#">
            <i className="fa-brands fa-google"></i> Masuk dengan Google
          </a>
        </div>
        <span>atau gunakan email Anda untuk masuk</span>

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
        <a href="#">Lupa kata sandi Anda?</a>
        <button type="submit">Masuk</button>
        <p>{message}</p>
      </form>
    </div>
  );
}

export default SignIn;
