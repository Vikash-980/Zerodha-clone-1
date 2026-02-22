import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="#">Track Tickets</a>
      </div>

      <div className="row p-5">
        <div className="col-1"></div>
        <div className="col-5 p-5">
          <h4>Search for an answer or browse help topics <br /> to create a ticket</h4>

              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Eg. how do i activate F&O, why is my order getting rejected.."/>

          <br />
          <a href="" style={{marginRight:"1rem"}}>Track account opening</a>
          <a href="" style={{marginRight:"1rem"}}>Track segment activation</a>
          <a href="">Intraday</a> <br />
          <a href="" style={{marginRight:"1rem"}}>margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-1"></div>
        <div className="col-5 pt-5">
          <h4>Featured</h4>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - Feb 2026</a> <br />
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;
