import React, { useState } from "react";
import Header from "../Header/Header";
import CardComponent from "./CardComponent";
import "./home.css";

function Home() {
  const [cards, setCards] = useState("forms");
  return (
    <div className="home">
      <Header />
      <div className="">
        <div className="row p-0 m-0">
          <div className="col-md-3">
            <div className="sidebar">
              <div className="content">
                <div className="left" onClick={() => setCards("forms")}>
                  <i className="ri-file-line"></i>
                  <h5>Your Forms</h5>
                </div>
                <div className="left" onClick={() => setCards("template")}>
                  <i class="ri-gallery-upload-line"></i>
                  <h5>Template Gallery</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="main-content">
              {cards === "forms" ? <CardComponent /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
