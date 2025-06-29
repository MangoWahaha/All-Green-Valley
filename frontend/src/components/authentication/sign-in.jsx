function SignIn() {
  return (
    <div className="form sign-in">
      <form>
        <h1>Masuk ke Akun Anda</h1>
        <div className="google-account">
          <a href="#">
            <i className="fa-brands fa-google"></i> Masuk dengan Google
          </a>
        </div>
        <span>atau gunakan email Anda untuk masuk</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Kata Sandi" />
        <a href="#">Lupa kata sandi Anda?</a>
        <button>Masuk</button>
      </form>
    </div>
  );
}

export default SignIn;
