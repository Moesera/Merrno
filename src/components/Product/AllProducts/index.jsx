import { Link } from "react-router-dom";

import * as S from "../../../App.styles";
import C from "../../../scss/modules/cards/Card.module.scss";
import ProductPrice from "../PriceCalculation/index";

function AllProducts({ products }) {
  return (
    <S.Container>
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/product/${product.id}`}>
            <S.Card className={C.smallCard}>
              <section>
                <figure>
                  <img src={product.imageUrl} alt={product.title}></img>
                </figure>
                <div>
                  <h2>{product.title}</h2>
                  <h3 className="truncate">{product.description}</h3>
                </div>
              </section>

              <section>
                <ProductPrice price={product.price} discount={product.discountedPrice}></ProductPrice>
                <div>
                  <S.Button>Show</S.Button>
                </div>
              </section>
            </S.Card>
          </Link>
        );
      })}
    </S.Container>
  );
}

export default AllProducts;
