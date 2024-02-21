import Feat from "./Feat";

function Features() {
    return ( 
    <div className="features">
        <div className="container">
            <Feat head={"Tell Us Your Idea"} name={"magic"}/>
            <Feat head={"We Will Do All The Work"} name={"rocket"}/>
            <Feat head={"Your Product is Worldwide"} name={"globe"}/>
        </div>
           
    </div>
     );
}

export default Features;