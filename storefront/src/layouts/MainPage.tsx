import ClothesList from "../components/ProductLists";

import "./MainPage.css";
import { BiStore } from "react-icons/bi";

function RootPage(): JSX.Element {
  return (
    <>
      <nav className="navigation-title">
        <h1>
          <BiStore />
          Medusa Store
        </h1>
      </nav>
      <ClothesList />
    </>
  );
}

export default RootPage;
