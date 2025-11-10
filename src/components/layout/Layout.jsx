import { Outlet } from "react-router-dom";
import Header from "./components/Header/index";
import { useState, useEffect, createContext } from "react";
const url = "https://api.noroff.dev/api/v1/online-shop/";

export const DataContext = createContext();

function Layout() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const json = await res.json();

      setProducts(json);
    }

    fetchData();
  }, [setProducts]);

  return (
    <DataContext.Provider value={{ products }}>
      <Header />
      <Outlet />
    </DataContext.Provider>
  );
}

export default Layout;
