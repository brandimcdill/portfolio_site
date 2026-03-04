import "./Header.css";

function Header (){
    return(
        <div className="header__container">
            <h3 className="sub-header">Full-Stack Developer - Creator</h3>
            <h2 className="main_header">Where beauty meets the code behind it.</h2>
            <p className="header__description">I build elegant, functional web experiences - and explore the intersection of technology and beauty culture. Available for freelance projects.</p>
            <button type="button" className="work_button">View my work</button>
            <button type="button" className="connect_button">Let's Connect</button>
        </div>
    )
}
export default Header;