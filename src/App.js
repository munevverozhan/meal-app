import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import ModalComponent from "./components/ModalComponent";
import SearchComponent from "./components/SearchComponent";
import { useGlobalContext } from "./context";

function App() {
  const { showModal, favorites } = useGlobalContext()
  return (
    <>
      <SearchComponent />
      {favorites.length > 0 && <Favorites />}
      <Meals />
      {showModal && <ModalComponent />}
    </>
  );
}

export default App;
