import React from 'react'

function Stats() {
    return ( 
        <div className="container p-3 mb-5">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h2 className='fs-2 mb-5'>Trust with confidence</h2>
                    <h3 className='fs-4'>Customer-first always</h3>
                    <p className='mb-5'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p className='mb-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                    <h3 className='fs-4'>The Zerodha universe</h3>
                    <p className='mb-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h3 className='fs-4'>Do better with money</h3>
                    <p className='mb-5'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className="col-6 p-5">
                    <img src="media/images/ecosystem.png" alt="ecosystem.png" style={{width:"90%"}} />
                    <div className='text-center'>
                        <a href="" className='mx-5'>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href="">Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;