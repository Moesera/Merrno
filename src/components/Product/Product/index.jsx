import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductPrice from "../PriceCalculation/index";
import { useStore } from "../../../hooks/useProductStore";

import * as S from "../../../App.styles";
import styles from "../../../pages/product/Product.module.scss";
import productStyles from "./Product.module.scss";

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
        console.log(json);
      } catch (err) {
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

      <article className={productStyles.product}>

        {/* Product showcase */}
        <div className={productStyles.productHeading}>
          <figure>
            <img src={product.imageUrl} alt={product.title} />
          </figure>
        </div>

        {/* Product details */}
        <section aria-labelledby="details" className={productStyles.productDetails}>
          <h2 className={productStyles.productTitle}>{product.title}</h2>
          
          <div>
            <p>{product.description}</p>
          </div>

          <div aria-labelledby="categories">
            <h2>Category</h2>
            <div className={productStyles.prodTags}>
              <p>{product.tags.join(", ")}</p>
            </div>
          </div>

          <section className={productStyles.productRating}>
            <h2>Rating</h2>
            <p>{product.rating} / 5</p>
          </section>

          <section aria-labelledby="pricing" className={productStyles.priceBlock}>
            <h2>Price</h2>
            <div>
              <ProductPrice className={productStyles.priceTag} price={product.price} discount={product.discountedPrice}/>
              <S.Button onClick={addToCartButton}>Add to cart</S.Button>
            </div>
          </section>
        </section>

      </article>

      <section className={productStyles.reviewSection}>
        <h2>Reviews</h2>
        {product.reviews.length > 0 ? (
          product.reviews.map((review) => {
            return (
              <S.Card key={review.id} className={productStyles.review}>
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
    </div>
  );
}

export default ProductFetch;
