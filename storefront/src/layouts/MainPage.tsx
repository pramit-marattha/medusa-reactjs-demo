import ClothesList from "../components/ProductLists";

import "./MainPage.css";

function RootPage(): JSX.Element {
  return (
    <>
      <nav className="navigation-title">
        <h1>Medusa Store</h1>
      </nav>
      <ClothesList />
    </>
  );
}

export default RootPage;
