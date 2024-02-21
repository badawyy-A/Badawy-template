function Serv(props) {
    return ( 
            <div className="svr">
                <i className={`fa fa-${props.name} fa-2x`}></i>
                <div className="text">
                    <h3>{props.head}</h3>
                    <p>{props.discription}</p>
                </div>
            </div>
     );
}

export default Serv;