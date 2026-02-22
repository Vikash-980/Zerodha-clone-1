import React from 'react'

const Team = () => {
  return (
    <div>
       <div className="container">
        <div className="row p-3 mt-5  border-top">
          <h1 className="text-center " style={{ fontSize: "1.5rem" }}>
            People
          </h1>
        </div>

        <div className="row p-5 text-muted " style={{lineHeight:"1.8", fontSize:"1.2rem"}}>
          <div className="col-6 p-5 text-center">

           <img src="media/images/nithinKamath.jpg" alt="Founder Image" style={{borderRadius:"100%",width:"50%"}} />

           <h4 className='mt-4 fs-5'>Nithin Kamath</h4>
           <p className='fs-6'>Founder, CEO</p>
          </div>
          <div className="col-6 p-5">
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

            <p> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

            <p>Playing basketball is his zen.</p>

            <p>Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> / <a href="#">Twitter</a></p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
