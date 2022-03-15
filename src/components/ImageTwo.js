import { Parallax } from 'react-parallax';
import Img2 from '../img/img2.jpg'

const ImageTwo = () => ( <
    Parallax className = 'image'
    blur = { 0 }
    bgImage = { Img2 }
    strength = { 800 }
    bgImageStyle = {
        { minHeight: "100vh" }
    } >
    <
    div className = 'content' >
    <
    span className = "img-txt" > A tu servicio < /span> < /
    div > <
    /Parallax>
);

export default ImageTwo