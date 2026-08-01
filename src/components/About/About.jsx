import "./About.css";

function About () {
    return (
        <>
            <div className="about__container">
                <h2 className="section__header">About Me</h2>
                <h3 className="header__description">A developer with taste</h3>
                <p className="section__description">I'm a full-stack developer who brings something rare to the table: a genuine passion for beauty, aesthetics, and design thinking - alongside the technical skills to build real, production-ready software. </p>
                <p className="section__description">I understand that the best products don't just work - they feel right. I bring that sensibility to every line of code I write, from the backend architecture to the pixel-level details of a UI.</p>
                <p className="section__description">I'm actively growing my skills and looking for freelance clients who want a developer who cares as much about the experience as the engineering. Especially excited to work with beauty, lifestyle, and wellness brands.</p>
            </div>
            <section className="list__container">
                <ul className="about__list">
                    <li className="list__section"> 
                        <h3 className="section__header">Focus</h3>
                        <h2 className="header__description">Full-Stack</h2>
                        <p className="section__description">Front end + Back end</p>
                    </li>
                    <li className="list__section"> 
                        <h3 className="section__header">Availability</h3>
                        <h2 className="header__description">Open</h2>
                        <p className="section__description">Taking on freelance projects now</p>
                    </li>
                    <li className="list__section"> 
                        <h3 className="section__header">Niche</h3>
                        <h2 className="header__description">Beauty x Tech</h2>
                        <p className="section__description">Where aesthetics meets engineering</p>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default About;
