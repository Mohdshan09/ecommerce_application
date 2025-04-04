import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }

        axios.get("http://localhost:5000/api/auth/me", {
            headers: { Authorization: `Bearer ${token}` }
        }).then(response => {
            setUser(response.data);
        }).catch(() => {
            localStorage.removeItem("token");
            navigate("/login");
        });
    }, [navigate]);

    return (
        <div>
            <h2>Profile</h2>
            {user ? (
                <>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={() => localStorage.removeItem("token")}>Logout</button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Profile;
