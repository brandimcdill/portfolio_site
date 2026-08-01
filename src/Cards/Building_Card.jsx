import './Building_Card.css';

function Building_Card() {
    return(
        <section className="card_container">
            <h3 className="card__sub-header">Currently Building With</h3>
            <h2 className="card__header">Full-Stack Development</h2>
            <p className="card__description">Crafting products from database to user interface - with an eye for aesthetics that most engineers overlook.</p>
            <div className="button__container">
                <button type="button" className="button">React</button>
                <button type="button" className="button">Node.js</button>
                <button type="button" className="button">Typescript</button>
                <button type="button" className="button">Express</button>
            </div>
            <p className="card__description">Also creating on Youtube - Beauty x Tech where glamour meets code.</p>


        </section>
        
    )
}

export default Building_Card;