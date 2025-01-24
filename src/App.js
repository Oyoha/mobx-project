import "./App.css";
import { TaskList } from "./components/tasks/TaskList";
import { Wrapper } from "./components/wrapper/Wrapper";
import { RootStoreContext } from "./root-store-context";
import RootStore from "./stores/root-store";

function App() {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <div className="App">
        {/* <Wrapper /> */}
        <TaskList />
      </div>
    </RootStoreContext.Provider>
  );
}

export default App;
