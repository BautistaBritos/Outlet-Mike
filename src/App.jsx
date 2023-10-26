import { NavBar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return <>
        <NavBar />
        <ItemListContainer greeting={"Hello World"}/>
  </>

}

export default App