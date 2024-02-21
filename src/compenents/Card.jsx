function Card(props) {
    return ( 
        <div className="card">
            <img src={props.src} alt=""/>
            <div className="info">
                <h3>Project Here</h3>
                <p>My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
            </div>    
        </div>
     );
}

export default Card;