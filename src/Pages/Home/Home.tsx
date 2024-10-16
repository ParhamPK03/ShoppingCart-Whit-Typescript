import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Home() {
  return (
    <>
      <section>
        <p className="title">All Products:</p>
      </section>
      <img className="index-first-bg" src="/hero-gradient.svg" alt="" />
      <main className="main-index">
        <div className="card">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
          <main>
            <p>Test Title ...</p>
            <div className="card-details">
              <div>
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
              </div>
              <p>231$</p>
            </div>
            <button>Add to Basket</button>
          </main>
        </div>
        <div className="card">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
          <main>
            <p>Test Title ...</p>
            <div className="card-details">
              <div>
                <AiFillStar style={{ color: "orange" }} />
                <AiFillStar style={{ color: "orange" }} />
                <AiFillStar style={{ color: "orange" }} />
                <AiFillStar style={{ color: "orange" }} />
                <AiFillStar style={{ color: "orange" }} />
              </div>
              <p>231$</p>
            </div>
            <button>Add to Basket</button>
          </main>
        </div>
      </main>
    </>
  );
}

export default Home;
