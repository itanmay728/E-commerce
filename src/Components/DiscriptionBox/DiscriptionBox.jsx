import React from "react";
import "./DiscriptionBox.css";

const DiscriptionBox = () => {
  return (
    <div className="discriptionbox">
      <div className="discriptionbox-navigation">
        <div className="discriptionbox-nav-box">Discription</div>
        <div className="discriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          sapiente possimus doloremque a aliquid, sint facere velit deleniti
          expedita alias!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
          laudantium illo perferendis adipisci et nulla ea eveniet maiores
          tempora, ab mollitia distinctio voluptatem saepe expedita
          exercitationem excepturi consequatur debitis! Corrupti!
        </p>
      </div>
    </div>
  );
};

export default DiscriptionBox;
