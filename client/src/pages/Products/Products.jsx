import { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import './products.scss'

const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)
  return (
    <div className="products">
      <div className="container">
        <div className="productsWrapper">
          <div className="left">
            <div className="filteredItem">
              <h2>Product Category</h2>
              <div className="inputItem">
                <input type="checkbox" value={1} id="1" />
                <label htmlFor="1">Shoes</label>
              </div>
              <div className="inputItem">
                <input type="checkbox" value={2} id="2" />
                <label htmlFor="2">Skirts</label>
              </div>
              <div className="inputItem">
                <input type="checkbox" value={3} id="3" />
                <label htmlFor="3">Coats</label>
              </div>
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
            </div>
          </div>
          <div className="right">
            <img
              src="https://brittanyxavier.com/wp-content/uploads/2017/06/thrifts-and-threads-top-shop-new-york-featured.jpg"
              alt=""
              className="catImg"
            />
            <List catId={catId} maxPrice={maxPrice} sort={sort} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products