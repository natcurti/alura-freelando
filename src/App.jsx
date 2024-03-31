import Styles from "./components/GlobalStyles";
import ProviderTheme from "./components/ProviderTheme";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <ProviderTheme>
      <Styles />
      <RouterProvider router={router} />
    </ProviderTheme>
  );
}

export default App;
