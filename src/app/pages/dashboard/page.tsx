import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Dashboard = () => {
    const history = useNavigate()

    const handleClick = () => {
        history("/entrar")

    }
    return (
        <>
            <p>Page Dashboard</p>
            <Link to="/entrar">Login</Link>
            <button onClick={handleClick}>Login</button>
        </>
    );
};
