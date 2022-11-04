import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inscription, setInscription] = useState(false);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    setInscription(!inscription);
    if (confirmPassword !== password) {
      alert("Vos deux mots de passe ne sont pas identiques");
    }
  };

  const handleEddit = (event) => {
    event.preventDefault();
    setInscription(false);
  };

  return (
    <div className="container">
      <form
        onSubmit={handleRegister}
        className={
          inscription === true && password === confirmPassword
            ? "cacher"
            : "visible"
        }
      >
        <header>Create account</header>
        <label>Name</label>
        <input
          placeholder="name"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        ></input>
        <label>Email</label>
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        ></input>
        <label>Password</label>
        <input
          className="password"
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <label>Confirm your password</label>
        <input
          className="confirmPassword"
          placeholder="Confirm password"
          type="password"
          name="confirPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        ></input>
        <input className="bouton" type="submit" value="Register" />
      </form>

      <form
        onSubmit={handleEddit}
        className={inscription !== true ? "cacher" : "visible"}
      >
        <header>Results</header>
        <div className="resultInfo">
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </div>
        <input
          className="bouton"
          type="submit"
          value="Eddit your information"
        />
      </form>
      <Footer />
    </div>
  );
};

export default App;
