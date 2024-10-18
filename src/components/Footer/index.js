
import './index.css'

const Footer = () => {
    return (
        <footer className='footer-section'>
            <div className='footer-card'>
            <div>
                <div className='footer-logo-container'>
                    <img src='https://res.cloudinary.com/dxgjs0mtb/image/upload/v1728970643/Group_20_2_etwtji.png' alt='logo' className='footer-logo'/>
                    <p className='footer-logo-text'>EthAi</p>
                </div>
                <div className='footer-icons-container'>
                    <img src='https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729008994/vector_2_ymrpm2.png' alt='telegram' className='footer-icons' />
                    <img src='https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729008994/instagram_p9meau.png' alt='instagram' className='footer-icons' />
                    <img src='https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729008995/Group_1_e3uslu.png' alt='x app' className='footer-icons' />
                    <img src='https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729008995/f_b90nhx.png' alt='facebook' className='footer-icons' />
                    <img src='https://res.cloudinary.com/dxgjs0mtb/image/upload/v1729009009/vector_3_v5nbli.png' alt='' className='footer-icons' />
                </div>
            </div>
            <div className='footer-md-container'>
                <h className='footer-quote'>“Designed for traders of today, just like you."</h>
                <div className='footer-input'>
                    <input type='email' placeholder="What's your work email?" className='input-box'/>
                    <button type='button' className='message-btn'>Get Started</button>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer