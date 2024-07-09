import React, { useState, useEffect } from "react";
import { getItem, getPrice } from "./Redux/PriceSlice";

import { useSelector, useDispatch } from "react-redux";
function Pricing() {
  let data = useSelector((state) => state.product);
  let productPrice = useSelector((state) => state.price);

  let gst = 0.1 * productPrice.priceCount;
  let dispatch = useDispatch();
  dispatch(getItem(data));
  dispatch(getPrice(data));

  return (
    <>
      {productPrice.itemCount ? (
        <div className="col-lg-9 bg-grey">
          <div className="p-1">
            <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
            <hr className="my-4" />
            <div className="d-flex justify-content-between mb-4">
              <h5 className="text-uppercase">
                ITEMS - {productPrice.itemCount}
              </h5>
              <h5>
                <i className="fa-solid fa-indian-rupee-sign"></i>
                &nbsp;
                {productPrice.priceCount}
              </h5>
            </div>

            <hr className="my-4" />
            <div className="d-flex justify-content-between mb-5">
              <h5 className="text-uppercase">GST</h5>
              <h5>10 %</h5>
            </div>
            <hr className="my-4" />
            <div className="d-flex justify-content-between mb-5">
              <h5 className="text-uppercase">Total price</h5>
              <h5>
                <i className="fa-solid fa-indian-rupee-sign"></i>
                &nbsp;
                {gst + productPrice.priceCount}
              </h5>
            </div>

            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-dark btn-block btn-lg"
              data-mdb-ripple-color="dark"
            >
              Proceed
            </button>
          </div>
        </div>
      ) : (
        <div className="col-lg-9 bg-grey">
          <div className="p-1">
            <h3 className="fw-bold mb-5 mt-2 pt-1 text-muted">Summary</h3>
            <hr className="my-4" />
            <div className="d-flex justify-content-between mb-4">
              <h5 className="text-uppercase text-muted">
                items - No item selected
              </h5>
              <h5>&nbsp; No item selected</h5>
            </div>

            <hr className="my-4" />
            <div className="d-flex justify-content-between mb-5">
              <h5 className="text-uppercase text-muted">GST</h5>
              <h5>No item selected</h5>
            </div>
            <hr className="my-4" />
            <div className="d-flex justify-content-between mb-5">
              <h5 className="text-uppercase text-muted ">Total price</h5>
              <h5>&nbsp; No item selected</h5>
            </div>

            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-dark btn-block btn-lg "
              data-mdb-ripple-color="dark"
            >
              Add Items
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Pricing;
