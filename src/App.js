import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import ModalComponent from "./components/ModalComponent";
import SearchComponent from "./components/SearchComponent";
import { useGlobalContext } from "./context";

function App() {
  const { showModal } = useGlobalContext()
  return (
    <>
      <SearchComponent />
      {/* 
      <Favorites /> */}
      <Meals />
      {showModal && <ModalComponent />}
    </>
  );
}

export default App;
