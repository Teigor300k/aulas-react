import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
    <Link to="/pagina-inicial">Dashboard</Link>
      <form action="" method="post">
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="email" />
        </div>
      </form>
    </>
  );
};
