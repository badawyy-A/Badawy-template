function Feat(props) {
    return ( 
        <div className="feat">
            <i className={`fa fa-${props.name} fa-3x`}></i>
            <h3>{props.head}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
        </div>
     );
}

export default Feat;