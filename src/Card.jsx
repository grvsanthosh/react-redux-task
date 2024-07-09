import { useDispatch } from "react-redux";
import { INCREASE, DECREASE } from "./Redux/TodoSlice";
function Card({ data }) {
  let dispatch = useDispatch();

  return (
    <>
      <div className="col-lg-12">
        <div className="p-1">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
          </div>
          <hr className="my-4" />
          {data.map((e) => {
            return (
              <div
                key={e.id}
                className="row mb-0 d-flex justify-content-between align-items-center"
              >
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src={e.thumbnail}
                    className="img-fluid rounded-3"
                    alt="image"
                  />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <h6 className="text-muted">{e.category}</h6>
                  &nbsp;
                  <h6 className="text-black mb-0">{e.brand}</h6>
                  &nbsp;
                  <h6 className="text-black mb-0">{e.title}</h6>
                  &nbsp; &nbsp;
                  <h6 className="text-black mb-0">{e.description}</h6>
                  &nbsp;
                  <h6 className="text-black mb-0">
                    <i className="fa-solid fa-star-half-stroke"></i>
                    &nbsp;
                    {e.rating}
                  </h6>
                  &nbsp;
                  <h6 className="text-black mb-0">
                    <i className="fa-solid fa-cart-shopping"></i>
                    &nbsp;
                    {e.stock}
                  </h6>
                  &nbsp;
                  <h6 className="text-black mb-0">
                    <i className="fa-solid fa-tags"></i>
                    &nbsp;
                    {e.discountPercentage} %
                  </h6>
                  &nbsp;
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3 d-flex">
                  {/* changeable */}
                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-link px-1"
                    onClick={() => {
                      dispatch(DECREASE(e.id));
                    }}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <div className="input-group flex-nowrap">
                    <input
                      type="text"
                      className="form-control"
                      value={e.count}
                      readOnly
                    />
                  </div>
                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-link px-1"
                    onClick={() => {
                      dispatch(INCREASE(e.id));
                    }}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>

                <div className="col-md-3 col-lg-3 col-xl-3 offset-lg-1">
                  <h6 className="mb-0">
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                    &nbsp;
                    {e.price}
                  </h6>
                </div>
                {/* changeable */}
                <hr className="my-4" />
              </div>
            );
          })}

          <div className="pt-5">
            <h6 className="mb-0">
              <a href="#!" className="text-body">
                <i className="fas fa-long-arrow-alt-left me-2"></i>
                Back to shop
              </a>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
