import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductPrice from "../PriceCalculation/index";
import { useStore } from "../../../hooks/useProductStore";

import * as S from "../../../App.styles";
import styles from "../../../pages/product/Product.module.scss";
import C from "../../../scss/modules/cards/Card.module.scss";
import F from "../../../scss/modules/pageFeature/Feature.module.scss";

const url = "https://api.noroff.dev/api/v1/online-shop/";

function ProductFetch() {
  const { addToCart } = useStore();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    async function getProduct(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const res = await fetch(url);
        const json = await res.json();

        setProduct(json);
      } catch (err) {
        console.log(err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getProduct(`${url}${id}`);
  }, [id]);
  if (isLoading || !product) {
    return <div>Loading...</div>;
  }

  if (isError || !product) {
    return <div>Error...</div>;
  }

  function addToCartButton() {
    addToCart(product);
    notify();
  }

  const notify = () => toast("Item added to cart!", { autoClose: 500 });

  return (
    <div className={styles.pageWrapper}>
      <ToastContainer />
      <div className={styles.container}>
        <S.Card className={C.bigCard}>
          <figure>
            <img src={product.imageUrl} alt={product.title} />
          </figure>

          <h2>Price</h2>
          <ProductPrice price={product.price} discount={product.discountedPrice}></ProductPrice>

          <div>
            <S.Button onClick={addToCartButton}>Add to cart</S.Button>
          </div>
        </S.Card>
        <S.Card className={C.bigCard}>
          <section>
            <h2>Description</h2>
            <p>{product.description}</p>
          </section>

          <section>
            <h2>Categories</h2>
            <div className={styles.prodTags}>
              {product.tags.map((tag, index) => {
                return <p key={index}>{tag}</p>;
              })}
            </div>
          </section>

          <section className={styles.productRating}>
            <h2>Rating</h2>
            <p>{product.rating} / 5</p>
          </section>
        </S.Card>
      </div>

      <S.AsideFeature className={F.featureButton}>
        <section className={styles.reviewSection}>
          <h2>Reviews</h2>
          {product.reviews.length > 0 ? (
            product.reviews.map((review) => {
              return (
                <S.Card key={review.id} className={styles.review}>
                  <h2>{review.username}</h2>
                  <p>{review.description}</p>
                  <p className={styles.rating}>Rated: {review.rating} / 5</p>
                </S.Card>
              );
            })
          ) : (
            <div>Product has no reviews</div>
          )}
        </section>
      </S.AsideFeature>
    </div>
  );
}

export default ProductFetch;
