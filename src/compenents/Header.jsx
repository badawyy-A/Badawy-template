import { useState } from 'react';
import Logo from '../images/logo.png'
function Header() {
    const [active,setActive] = useState(false)
    const handleActive = ()=>{
        
        setActive(!active)
    }
    return ( 
        <div className="header">
            <div className="container">
                <img className="logo" src={Logo} alt=""/>
                <div className="links" >
                    <span className="icon" onClick={handleActive}>
                        <span></span>
                        <span className={`${active === true ? 'active' : ''} `}></span>
                        <span></span>
                        
                    </span>
                    <ul className={`${active === true ? 'active' : ''} `}>
                        <li><a href="#services">services</a></li>
                        <li><a href="#portfolio">portfolio</a></li>
                        <li><a href="#about">about</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Header;