import "./Navbar.css"
import {AiOutlineMenu} from "react-icons/ai"
import {Link} from "react-router-dom"

function Navbar() {

    const showMobileView = () => {
        document.getElementById("mobileView").classList.toggle("hidden");
        console.log(document.getElementById("mobileView"))
    }
    
    return(
        <nav className="main-navbar-container">
            <Link className="link-react-router" to="/">
                <h4>Example</h4>
            </Link>
            <div id="mobileView" className="links-container hidden">
                <Link className="link-react-router" to="/">
                    <h4 onClick={showMobileView} className="links">Inicio</h4>
                </Link>
                <Link className="link-react-router" to="/servicios">
                    <h4 onClick={showMobileView} className="links">Servicios</h4>
                </Link>
                <Link className="link-react-router" to="/contacto">
                    <h4 onClick={showMobileView} className="links">Contacto</h4>
                </Link>
                <Link className="link-react-router" to="/nosotros">
                    <h4 onClick={showMobileView} className="links">Nosotros</h4>
                </Link>
            </div>
            <h4 onClick={showMobileView} className="menu-button"><AiOutlineMenu/></h4>
        </nav>
    )
}

export default Navbar