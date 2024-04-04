import Styles from "./components/GlobalStyles";
import ProviderTheme from "./components/ProviderTheme";
import { UserSessionProvider } from "./context/UserSession";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <UserSessionProvider>
      <ProviderTheme>
        <Styles />
        <RouterProvider router={router} />
      </ProviderTheme>
    </UserSessionProvider>
  );
}

export default App;
