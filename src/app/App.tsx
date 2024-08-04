import { UserLoggedProvider } from "./shared/context/index"
import { Routes } from "./routes/routes";

function App() {
  return (
    <>
      <UserLoggedProvider>
        <Routes />
      </UserLoggedProvider>

    </>
  );
}

export default App;
