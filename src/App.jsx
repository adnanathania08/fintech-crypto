import "./App.css";
import HomePage from "../src/pages/HomePage";
import AppKitProvider from "./config/AppKitProvider";

function App() {
  return (
    <>
      <AppKitProvider>
        <HomePage />
      </AppKitProvider>
    </>
  );
}

export default App;
