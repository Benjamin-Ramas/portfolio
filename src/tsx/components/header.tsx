import { useLocation, Link} from "react-router-dom";
import { useState, useEffect } from "react";

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState("");
  
    useEffect(() => {
      let lastScrollY = window.scrollY;
  
      const updateScrollDirection = () => {
        const scrollY = window.scrollY;
        const direction: string = scrollY > lastScrollY && scrollY > 10? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 0|| scrollY - lastScrollY < -10)) {
          setScrollDirection(direction);
        }
        if(scrollY < 20){
            setScrollDirection("up");
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection);
      return () => {
        window.removeEventListener("scroll", updateScrollDirection);
      }
    }, [scrollDirection]);
    return scrollDirection;
  };

function Header (){
    const [navLinkExpand, setnavLinkExpand] = useState("hidden")

    const location = useLocation();
    const scrollDirection = useScrollDirection();

    const expandLink = () => {
      if(navLinkExpand === "hidden"){
        setnavLinkExpand("expand");
      }
      else{
        setnavLinkExpand("hidden");
      }
      if(scrollDirection == "down"){
        setnavLinkExpand("hidden");
      }
    };

    if(scrollDirection === "down" && navLinkExpand !== "hidden"){
      setnavLinkExpand("hidden");
    }

    if (location.pathname === '/error') {
        return null;
    }
    return(
        <>
            <header className={`header-${ scrollDirection}`}>
            <h1 className="highlighted-1 styled-underline mobile-icon"><Link to="/" className="headerlink">BR</Link></h1>
            <h1 className="highlighted-1 styled-underline desktop-icon"><Link to="/" className="headerlink">Benjamin Ramas</Link></h1>
                <nav>
                    <ul className={`header_links ${navLinkExpand}`}>
                        <li className="styled-underline desktop-only"><Link to="/" className="headerlink">Home</Link></li>
                        <li className="styled-underline mobile-only"><Link to="/" className="headerlink"><button className="redirect-button" onClick={() => {setnavLinkExpand("hidden")}}>Home</button></Link></li>

                        <li className="styled-underline desktop-only"><Link to="/about-me" className="headerlink">About Me</Link></li>
                        <li className="styled-underline mobile-only"><Link to="/about-me" className="headerlink"><button className="redirect-button"onClick={() => {setnavLinkExpand("hidden")}}>About Me</button></Link></li>

                        <li className="styled-underline desktop-only"><Link to="/experience" className="headerlink">Experience</Link></li>
                        <li className="styled-underline mobile-only"><Link to="/experience" className="headerlink"><button className="redirect-button"onClick={() => {setnavLinkExpand("hidden")}}>Experience</button></Link></li>

                        <li className="styled-underline desktop-only"><Link to="/contact" className="headerlink">Contact</Link></li>
                        <li className="styled-underline mobile-only"><Link to="/contact" className="headerlink"><button className="redirect-button">Contact</button></Link></li>

                        <li className="resume-button"><a>Resume</a></li>
                    </ul>
                </nav>
                <button 
                  className="hamburger-menu"
                  onClick={expandLink}
                  >TEST</button>
            </header>
        </>
    )
}

export default Header;