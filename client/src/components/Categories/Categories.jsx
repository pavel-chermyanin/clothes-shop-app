import { Link } from "react-router-dom";
import "./categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://i.pinimg.com/736x/13/3a/0d/133a0da5c773ed5b9f4d4581257502f4.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://i.pinimg.com/originals/13/55/b4/1355b49eb882aa9743542e7ae05c1fb3.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/2">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://i.pinimg.com/originals/a0/c5/7f/a0c57f92d4abcc2f0e590030340f3116.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/3">
              Men
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://media1.popsugar-assets.com/files/thumbor/zLfW-cy4SlKnqnXQHAc6uUTkIAY/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/09/12/715/n/1922564/dda1748f79e1dc15_New-York-str-c-RS17-2-57/i/Day-5.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/products/4">
                  Shoes
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://graziamagazine.ru/upload/attach/497/497104ba02645430d1d2bb1ee3271c1a.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/products/5">
                  accessory
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://i.pinimg.com/originals/89/02/2e/89022eee58efcf259e85b6d56fb0203a.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/5">
              New season
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}


export default Categories;