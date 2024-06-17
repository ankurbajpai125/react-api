import "./App.css";
import Search from "./Search";
import Pagination from "./Pagination";
import Stories from "./Stories";
// import { useGlobalContext } from "./Contex";
// import { useContext } from "react";
// import { AppContext } from "./Contex";

function App() {
  // const data = useContext(AppContext);
  // const data = useGlobalContext();

  return (
    <>
      {/* Welcome to world of bajpai! {data} */}
      {/* Welcome to world of bajpai! */}
      <Search />
      <Pagination />
      <Stories />
    </>
  );
}

export default App;
