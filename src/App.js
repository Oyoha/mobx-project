import "./App.css";
import { Wrapper } from "./components/wrapper/Wrapper";
import { RootStoreContext } from "./root-store-context";
import RootStore from "./stores/root-store";

function App() {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <div className="App">
        <Wrapper />
      </div>
    </RootStoreContext.Provider>
  );
}

export default App;
