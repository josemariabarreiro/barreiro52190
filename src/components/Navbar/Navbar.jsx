import './Navbar.scss'
import logo from '../../assets/logo1.jpg'
import CartWidget from '../CartWidget/CartWidget'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                {/* <img src={'./public/react.svg'} alt='LOGO'/> */}
                <img src={logo} alt='LOGO'/>

                <nav className="navbar">
                    <a href='#' className="navbar__link">Nosotros</a>
                    <a href='#' className="navbar__link">Productos</a>
                    <a href='#' className="navbar__link">Ofertas</a>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}