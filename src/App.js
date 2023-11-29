import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { TittleApp } from "./components/TittleApp/TittleApp";
import { ViewTasks } from "./components/ViewTasks/ViewTasks";

function App() {
  return (
    <>
      <NavBar />
      <TittleApp />
      <ViewTasks />
    </>
  );
}

export default App;
