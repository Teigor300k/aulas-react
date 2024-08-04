import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleClick = () => {
    console.log(email);

  }
  return (
    <>
      <Link to="/pagina-inicial">Dashboard</Link>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="text" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label> 
          <br />
          <input type="password" name="password" id="email" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleClick}>Entrar</button>
      </form>
    </>
  );
};
