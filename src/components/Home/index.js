import Header from '../Header'
import './index.css'

const Home = () => {
    return (
        <>
        <Header/>
        <div className='home-section'>
            <h1 className='home-heading'>When Innovation Meets <span className='highlight-text'>Innovation</span></h1>
            <p className='home-description'>Empowering Trading Through Advanced Technology</p>
            <button type='button' className='open-dapp-btn'>Open dApp</button>
        </div>
        </>
    )
}

export default Home