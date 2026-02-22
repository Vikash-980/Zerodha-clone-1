import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container">
      <div className="row mt-5 p-5">
        <div className="col-4 p-5">
          <img src={imageURL} />
        </div>
        <div className="col-3"></div>
        <div className="col-5 p-5 mt-5">
          <h1 className="fs-4 mb-4 ">{productName}</h1>
          <p style={{fontSize:"1.1rem"}}>{productDescription}</p>

          <div className="mt-4">
          <a href={tryDemo}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <a href={learnMore} style={{marginLeft:"4rem"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>

          <div className="mt-4">
          <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>
          <a href={appStore} style={{marginLeft:"4rem"}}><img src="media/images/appstoreBadge.svg" /></a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeftSection;
