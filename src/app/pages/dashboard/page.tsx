import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserLoggedContext } from "../../shared/context";


export const Dashboard = () => {

    const {userName} = useContext(UserLoggedContext)
    const history = useNavigate()

    const handleClick = () => {
        history("/entrar")

    }
    return (
        <>
            <p>Page Dashboard</p>
            <h2>{userName}</h2>
            
            <button onClick={handleClick}>Login</button>
        </>
    );
};
