import React from "react";

const RightSection = ({ imageURL, productName, productDescription, linkValue }) => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-4 p-5 mt-5" >
          <h1 className="fs-4 mb-4" style={{marginTop:"6rem"}}>{productName}</h1>
          <p style={{ fontSize: "1.1rem" }}>{productDescription}</p>
          <div>
            <a href="#">{linkValue} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>

        <div className="col-2"></div>

        <div className="col-6 text-center">
          <img src={imageURL} style={{width:"90%"}} />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
