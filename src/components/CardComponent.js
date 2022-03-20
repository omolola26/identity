import React from "react";
import "./cardCom.css";
import { cardDatas } from "../components/cardData";
import AllCards from "../components/AllCards";
import { Modal, Input } from "antd";
import { useState } from "react";

function CardComponent() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  //   const [cards, setCards] = useState("forms");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="cardComponent" value="forms">
      <div className="row">
        <div className="col-md-3">
          <div className="card sepCard">
            <div className="card-body centre">
              <div className="card-icon" onClick={showModal}>
                <i className="ri-add-line"></i>
              </div>
            </div>
            <h5 className="card-titleform">Create A New Form</h5>
          </div>
        </div>

        {cardDatas.map((item) => (
          <div className="col-md-3">
            <AllCards item={item} key={item.id} />
          </div>
        ))}
      </div>
      {/* <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
         <Input/>
        </Modal> */}
    </div>
  );
}

export default CardComponent;
