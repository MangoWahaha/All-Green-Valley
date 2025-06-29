import { useState } from 'react';
const Login = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const submission = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3000/contact', {
            method : 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({name, email, password})
        });
        const medata = await response.json()

        if (err) {
            console.error("failed to connect to database");
        }
    }
    return(
        <>
          <div className="app">
            <div className="login-container">
                <h2>Sign Up</h2>
                <form onSubmit={submission}>
                    <input type="name" placeholder="Name" required  
                    value={name} onChange={(e) => setname(e.target.value)}/>

                    <input type="email" placeholder="Email" required 
                    value={email} onChange={(e) => setemail(e.target.value)}/>

                    <input type="password" placeholder="Password" required 
                    value={password} onChange={(e) => setpassword(e.target.value)}/>

                    <button type="submit">Sign Up</button>
                </form>
                <div className="footer">
                <p>Don't have an account? <a href="#">Sign up</a></p>
                </div>
            </div>
        </div>  
        </>
    )
}

export default Login;