import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Link, Box, Grid, IconButton } from "@mui/material";
import { Email, Facebook, Instagram, Twitter } from "@mui/icons-material";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../Resources";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [buttonClass, setButtonClass] = useState("login-button");
    const navigate = useNavigate()
    const handleLogin = () => {
      if (username === "adm") {
          navigate("/Adm");
      } else {
          navigate("/Client");
      }
  }
  

    useEffect(() => {
        if (username !== "" && password !== "") {
            setButtonClass("login-button-filled");
        } else {
            setButtonClass("login-button");
        }
    }, [username, password]);

    return (
        <>
            <Box sx={{ flexGrow: 1 }} mx="auto" maxWidth="100%" style={{ width: "100%", overflow: "hidden", marginTop: 0 }}>
                <Navbar login={false}/>
                <div className="login-container">
                    <h2 className="login-heading">Login</h2>
                    <form className="login-form">
                        <label className="login-label" htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            className="login-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className="login-label" htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="login-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handleLogin} type="submit" className={buttonClass}>Login</button>

                    </form>
                </div>
            </Box>
          <Footer/>
        </>

    );
}

export default Login;