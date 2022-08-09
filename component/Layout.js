import React, { useEffect, useState } from "react";
import axios from "axios";

const Layout = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json`
      )
      .then((res) => {
        setdata(res.data.data.products);
        // console.log(res)
      });
  }, []);

  console.log(data);

  return (
    <>
      <div className="container">
        <div className="row mx-auto justify-content-center">
          {data.map((items, i) => {
            return (
              <div
                key={i}
                className="card  my-2 mx-2 "
                style={{
                  width: "288px",
                  height: "32rem",
                  backgroundColor: "#0d0d0d",
                }}
              >
                <img
                  src={items.plpimaage}
                  className="card-img-top rounded "
                  alt="..."
                />
                <div className="card-body">
                  <p className="fs-6" style={{ color: "white" }}>
                    {items.name}
                  </p>

                  <p style={{ color: "white" }}>
                    ₹<span className="fw-bold"> {items.price}</span>{" "}
                    <span className="fs-6" style={{ color: "#2cb12c" }}>
                      ({items.inr_discount}% off)
                    </span>
                    <span>
                      <img
                        src="icons8-add-shopping-cart-24.png"
                        style={{
                          width: "30px",
                          height: "30px",
                          float: "right",
                        }}
                      />
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Layout;
