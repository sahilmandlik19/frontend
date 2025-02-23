import { Link } from "react-router-dom";
import { useState } from "react";
import Table from "./Table";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #ff9966, #ff5e62)",
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      padding: "1rem 2rem",
      background: "rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "1.8rem",
      color: "#fff",
      fontWeight: "bold",
    },
    buttonContainer: {
      display: "flex",
      gap: "1rem",
      marginTop: "2rem",
    },
    button: {
      padding: "10px 20px",
      background: "#fff",
      color: "#185a9d",
      border: "none",
      borderRadius: "5px",
      fontSize: "1rem",
      cursor: "pointer",
      textDecoration: "none",
      fontWeight: "bold",
      transition: "0.3s",
    },
    buttonHover: {
      background: "#ddd",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <h1 style={styles.title}>Personal Finance Manager</h1>
        {isLoggedIn && <button onClick={handleLogout} style={styles.button}>Logout</button>}
      </div>
      <div style={styles.buttonContainer}>
        {!isLoggedIn ? (
          <>
            <Link to="/login" style={styles.button}>Login</Link>
            <Link to="/signup" style={styles.button}>Sign Up</Link>
          </>
        ) : (
          <Table />
        )}
      </div>
    </div>
  );
}
