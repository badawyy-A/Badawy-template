import Card from "./Card";
import img1 from '../images/portfolio-1.webp'
import img2 from '../images/portfolio-2.jpg'
import img3 from '../images/portfolio-3.jpg'
import {motion} from 'framer-motion'
import { useRef, useState } from "react";


function Portfolio() {
    const [width,setWidth] = useState(0)
    const container = useRef()
    const handleWidth = ()=> {
        const newWidth = container.current.scrollWidth - container.current.offsetWidth
        setWidth(newWidth)
    }
    const handleScroll = (d)=>{
        const scrollAmount =  d === 'left' ? -330 : 330 
        container.current.scrollTo({
            left: container.current.scrollLeft + scrollAmount,
            behavior: 'smooth'
        })
    }
    return ( 
        <div className="portfolio" id="portfolio">
            <i className="fa fa-chevron-right scrole scrole-left" onClick={()=> handleScroll("right") } ></i>
            <i className="fa fa-chevron-left scrole scrole-right" onClick={()=> handleScroll("left") }></i>
            <motion.div className="container" ref={container}  onLoad={handleWidth}>
                <div className="special-heading">portfolio</div>
                <p>If you do it right, it will last forever.</p>
                <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="portfolio-content">
                    <Card src={img1}  />
                    <Card src={img2}  />
                    <Card src={img3} />
                    <Card src={img1}  />
                    <Card src={img2}  />
                    <Card src={img3} />
                </motion.div>
            </motion.div>
        </div> 
     );
}

export default Portfolio;