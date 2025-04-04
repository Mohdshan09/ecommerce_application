import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            await axios.post("http://localhost:5000/api/auth/register", user);
            navigate("/login");
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="text" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
            <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <button onClick={handleRegister}>Sign Up</button>
        </div>
    );
}

export default Register;
