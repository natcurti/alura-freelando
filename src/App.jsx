import Card from "./components/Card";
import Styles from "./components/GlobalStyles";
import ProviderTheme from "./components/ProviderTheme";

function App() {
  return (
    <ProviderTheme>
      <Styles />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </ProviderTheme>
  );
}

export default App;
