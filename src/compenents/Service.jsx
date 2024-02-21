import Serv from "./Serv";
import img from '../images/mt-everest.jpg'

function Service() {
    return ( 
        <div className="services" id="services">
    <div className="container">
        <div className="special-heading">services</div>
        <p>Don't be busy, be productive</p>
        <div className="services-content">
            <div className="col">
                <Serv 
                    name={"paint-brush"}
                    head={"Graphic Design"}
                    discription={"Graphic design is the process of visual communication and problem-solving using one or more oftypography, photography and illustration."}
                />

                <Serv 
                    name={"image"}
                    head={"UI & UX"}
                    discription={"Process of enhancing user satisfaction with a product by improving the usability, accessibility, and pleasure provided in the interaction."}
                />
            </div>
            <div className="col">
                <Serv 
                    name={"cogs"}
                    head={"Web Design"}
                    discription={"Web design encompasses many different skills and disciplines in the production and maintenance of websites"}
                />

                <Serv 
                    name={"code"}
                    head={"Web Development"}
                    discription={"Web development is a broad term for the work involved in developing a web site for the Internet or anintranet."}
                />
            </div>
            <div className="col">
                <img className="image" src={img} alt=""/>
            </div>
            
        </div>
    </div>
</div>
     );
}

export default Service;