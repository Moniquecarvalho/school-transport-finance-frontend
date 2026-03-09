import { AuthBanner } from "./components/AuthBanner";
import { Login } from "./pages/Login";

function App() {
  return (
    <>
    <AuthBanner>
      <Login />
    </AuthBanner>
    </>
  );
}

export default App;
