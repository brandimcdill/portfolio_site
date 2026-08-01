import "./Header.css";

import Building_Card from "../../Cards/Building_Card";

function Header (){
    return(
        <header>
            <div className="header__container">
                <h3 className="sub-header">Full-Stack Developer - Creator</h3>
                <h2 className="main_header">Where beauty meets the code behind it.</h2>
                <p className="header__description">I build elegant, functional web experiences - and explore the intersection of technology and beauty culture. Available for freelance projects.</p>
                <button type="button" className="button work_button">View my work</button>
                <button type="button" className="button connect_button">Let's Connect</button>
            </div>
            <Building_Card />
        </header>
    )
}
export default Header;