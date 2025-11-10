import { useContext } from "react";
import { DataContext } from "../../components/layout/Layout"

import AllProducts from "../../components/Product/AllProducts/index";
import * as S from "../../App.styles";
import styles from "./Home.module.scss";

function Home() {
  const {products, filteredProducts} = useContext(DataContext);

  return (
    <S.PageContainer>
      <div className={styles.pageWrapper}>
        <h1>Products</h1>
        <AllProducts products={products} onFilter={filteredProducts}/>
      </div>
    </S.PageContainer>
  );
}

export default Home;
