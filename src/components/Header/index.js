import { TbMenu } from "react-icons/tb";
import './index.css'

const Header = () => {
    return (
        <>
        <header className="sm-header">
            <img src="https://res.cloudinary.com/dxgjs0mtb/image/upload/v1728970643/Group_20_2_etwtji.png" alt="logo" className="sm-logo" />
            <button type="button" className='hide-btn'><TbMenu className="sm-menu-btn" /></button>
        </header>

        <header className="md-header">
            <div className="md-logo-container">
                
                
            </div>
            <div className="md-nav-items-container">
                <button type="button" className="nav-items">Features</button>
                <button type="button" className="nav-items">Why Us</button>
                <button type="button" className="nav-items">Tokenomics</button>
                <button type="button" className="nav-items">Roadmap</button>
            </div>

            <div className="md-login-btn-container">
                <button type="button" className="md-login-btn">Log in</button>
                <button type="button" className="md-whitepaper-btn">Whitepaper</button>
            </div>
            
        </header>

        </>
    )
}

export default Header