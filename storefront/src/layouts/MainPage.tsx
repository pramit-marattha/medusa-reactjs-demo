import ProductLists from "../components/ProductLists";

import "./MainPage.css";
import { BiStore } from "react-icons/bi";

function RootPage(): JSX.Element {
  return (
    <>
      <nav className="navigation-title">
        <h1>
          <BiStore />
          Awesomee Store
        </h1>
      </nav>
      <ProductLists />
    </>
  );
}

export default RootPage;
