import { useLocation, Link} from "react-router-dom";

function Header (){
    const location = useLocation();

    if (location.pathname === '/error') {
        console.log("Error");
        return null;
    }
    return(
        <>
            <header>
            <h1 className="highlighted-1 styled-underline mobile-icon"><Link to="/" className="headerlink">BR</Link></h1>
            <h1 className="highlighted-1 styled-underline desktop-icon"><Link to="/" className="headerlink">Benjamin Ramas</Link></h1>
                <nav>
                    <ul className="header_links">
                        <li className="styled-underline"><Link to="/" className="headerlink">Home</Link></li>
                        <li className="styled-underline"><Link to="/about-me" className="headerlink">About Me</Link></li>
                        <li className="styled-underline"><Link to="/experience" className="headerlink">Experience</Link></li>
                        <li className="styled-underline"><Link to="/contact" className="headerlink">Contact</Link></li>
                        <li className="resume-button"><a>Resume</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;