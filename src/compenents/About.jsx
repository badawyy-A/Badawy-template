import about from '../images/about.JPG'

function About() {
    return ( 
        <div className="about" id="about">
            <div className="container">
                <div className="special-heading">about</div>
                <p>Less is more work</p>
                <div className="about-content">
                    <div className="abdou">
                        <img src={about} alt=""/>
                    </div>
                    <div className="text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet eius officia non nulla eum rem, sapiente eaque
                            cupiditate pariatur eos nesciunt minus repellat reprehenderit omnis, animi,
                            iusto alias sunt nam?
                        </p>
                        <hr/>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus repellat, aut rem cupiditate, voluptatum, illum magnam reprehenderit
                            quam quos dicta eveniet iusto doloremque aspernatur totam qui placeat debitis eum. Maiores!
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default About;