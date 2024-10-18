import './index.css'

const About = () => {
    return (
        <div className='about-section'>
            <h1 className='about-heading'>About EthAi</h1>
            <p className='about-description'>At Eth Ai, we’re all about making crypto trading easier and more intuitive. We provide tools that help traders keep up with all new market trends, track top traders’ movements.</p>
            <div>
            <button type='button' className='about-read-more-btn'>Read more</button>
            </div>
            <div className='about-card'>
                <div>
                    <img src='https://res.cloudinary.com/dxgjs0mtb/image/upload/v1728997150/graph_ceoyno.png' alt='stay ahead' className='about-icons'/>
                    <h1 className='about-card-heading'>Stay Ahead</h1>
                    <p className='about-card-description'>No more guesswork—get clear, trustable insights.</p>

                </div>
                <div>
                    <img src='https://res.cloudinary.com/dxgjs0mtb/image/upload/v1728997150/Vector_wfhr9e.png' alt='know your assets' className='about-icons'/>
                    <h1 className='about-card-heading'>Stay Ahead</h1>
                    <p className='about-card-description'>No more guesswork—get clear, trustable insights.</p>

                </div>
                <div>
                    <img src='https://res.cloudinary.com/dxgjs0mtb/image/upload/v1728997149/Vector_1_i5gq3v.png' alt='simple, not overwhelming' className='about-icons'/>
                    <h1 className='about-card-heading'>Stay Ahead</h1>
                    <p className='about-card-description'>No more guesswork—get clear, trustable insights.</p>

                </div>
                <div>
                    <img src='https://res.cloudinary.com/dxgjs0mtb/image/upload/v1728997149/Future_Technology_hurtqv.png' alt='future proof' className='about-icons'/>
                    <h1 className='about-card-heading'>Stay Ahead</h1>
                    <p className='about-card-description'>No more guesswork—get clear, trustable insights.</p>

                </div>
            </div>
        </div>
    )
}

export default About