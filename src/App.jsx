import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import Pricing from "./Pricing";
import Card from "./Card";
function App() {
  let data = useSelector((state) => state.product);

  return (
    <>
      <section
        className="h-100 h-custom"
        style={{ backgroundColor: "#d2c9ff" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <Card data={data} />
                    <Pricing />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
