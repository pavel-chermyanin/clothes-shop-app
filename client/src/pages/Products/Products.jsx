import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import TuneIcon from "@mui/icons-material/Tune";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [openFilter, setOpenFilter] = useState(
    window.matchMedia("(max-width: 500px)").matches ? false : true
  );
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const filterRef = useRef();

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  useEffect(() => {
    const hideFilter = () => {
      const isMobile = window.matchMedia("(min-width: 500px)").matches;
      if (isMobile) {
        setOpenFilter(true);
      } else {
        setOpenFilter(false);
      }
    };
    window.addEventListener("resize", hideFilter);

    return () => {
      window.removeEventListener("resize", hideFilter);
    };
  }, []);

  useEffect(() => {
    const hideFilterBar = (e) => {
      e.stopPropagation();
      if (
        !e.path.some((item) => item?.classList?.contains("left")) &&
        !window.matchMedia("(min-width: 500px)").matches &&
        !e.path.some((item) => item?.classList?.contains("filter"))
      ) {
        setOpenFilter(false);
        console.log(e.target);
      }
    };
    window.addEventListener("click", hideFilterBar);

    return () => {
      window.removeEventListener("click", hideFilterBar);
    };
  }, []);

  useEffect(() => {
    if (openFilter && !window.matchMedia("(min-width: 500px)").matches) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [openFilter]);

  return (
    <div className="products">
      <div className="container">
        <div className="productsWrapper">
          <div
            className="layer-dark"
            style={{
              display:
                openFilter && !window.matchMedia("(min-width: 500px)").matches
                  ? "block"
                  : "none",
            }}
          ></div>
          <div
            className="left"
            ref={filterRef}
            style={{
              transform: openFilter ? "translateX(0)" : "translateX(-150%)",
            }}
          >
            <div className="filteredItem">
              <h2>Product Category</h2>
              {data?.map((item) => (
                <div className="inputItem" key={item.id}>
                  <input
                    type="checkbox"
                    value={item.id}
                    id={item.id}
                    onChange={handleChange}
                  />
                  <label htmlFor="1">{item.attributes.title}</label>
                </div>
              ))}
            </div>
            <div className="filteredItem">
              <h2>Filter by price</h2>
              <div className="inputItem">
                <span>0</span>
                <input
                  type="range"
                  min={0}
                  max={1000}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
                <span>{maxPrice}</span>
              </div>
            </div>
            <div className="filteredItem">
              <h2>Sort by</h2>
              <div className="inputItem">
                <input
                  type="radio"
                  name="price"
                  id="asc"
                  value="asc"
                  onChange={(e) => setSort("asc")}
                />
                <label htmlFor="asc">Price (Lowest first)</label>
              </div>
              <div className="inputItem">
                <input
                  type="radio"
                  name="price"
                  id="desc"
                  value="desc"
                  onChange={(e) => setSort("desc")}
                />
                <label htmlFor="desc">Price (Highest first)</label>
              </div>
              <div className="inputItem">
                <button
                  onClick={(e) => {
                    // e.stopImmediatePropagation();
                    !window.matchMedia("(min-width: 500px)").matches &&
                      setOpenFilter(false);
                  }}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <h3 className="mobile-title">Products Category</h3>
            <img
              src="https://brittanyxavier.com/wp-content/uploads/2017/06/thrifts-and-threads-top-shop-new-york-featured.jpg"
              alt=""
              className="catImg"
            />
            <div
              className="filter"
              onClick={() => {
                setOpenFilter(true);
              }}
            >
              <TuneIcon />
              <span>filter</span>
            </div>
            <List
              catId={catId}
              maxPrice={maxPrice}
              sort={sort}
              subCats={selectedSubCats}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
