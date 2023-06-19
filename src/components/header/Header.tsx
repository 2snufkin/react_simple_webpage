import './Header.css'
// @ts-ignore
import Logo from '../../assets/logo_nav.webp'
export const Header = () => {
    return (
        <nav>
            <div className="header-container">
            <img src={Logo} alt="logo" className="logo"/>
            <ul className="nav-links">
                <li><a href="#"></a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </div>
        </nav>
    )
}
