import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleClick = useCallback(() => {
    console.log(email);
    console.log(password);
  }, [email, password])


  const emailLength = useMemo(() => {
    return email.length * 1000
  }, [email.length])
  return (
    <>
      <Link to="/pagina-inicial">Dashboard</Link>
      <p>{emailLength}</p>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleClick}>Entrar</button>
      </form>
    </>
  );
};
