// Tools
import { useState, useContext, useMemo } from "react";
import { DataContext } from "../layout/Layout";
import { Link } from "react-router-dom";

// Assets
import SearchIcon from "../../assets/interface/navigation/icons8-search-48.png";
import * as S from "../../App.styles";

/**
 *  Search input.
 * @param {event} handleClick closes the search input
 */
const ComponentWithInput = ({ onClick }) => {
  const { products } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const hideSearch = () => {
    setIsSearchVisible(false);
  };

  const filteredProducts = useMemo(() => {
    if (searchTerm.trim() === "") {
      setIsSearchVisible(false);
      return [];
    }

    const results = products.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setIsSearchVisible(results.length > 0);
    return results;
  }, [searchTerm, products]);

  return (
    <>
      <S.SearchBar>
        <input
          onChange={handleSearch}
          value={searchTerm}
          type="search"
          placeholder="Search..."
        />
        <label onClick={onClick}>
          <img src={SearchIcon} alt="Search Icon" />
        </label>
      </S.SearchBar>
      {isSearchVisible && (
        <div className="scroll-box">
          <ol className="search-result">
            {filteredProducts.map((product) => {
              return (
                //* Find another method to also hide search or the search bar.
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  onClick={hideSearch}
                >
                  <li>
                    <figure>
                      <img src={product.imageUrl} alt={product.title} />
                    </figure>
                    <h2>{product.title}</h2>
                  </li>
                </Link>
              );
            })}
          </ol>
        </div>
      )}
    </>
  );
};

// ! Fuck this, this is bad UX ! Handle it better.

/**
 * Renders the search input
 */
function SearchBar() {
  return (
    <div className="element-border full-width">
        <ComponentWithInput />
    </div>
  );
}

export default SearchBar;
