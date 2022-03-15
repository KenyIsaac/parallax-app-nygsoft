import { Parallax } from 'react-parallax';
import Img1 from '../img/img1.jpg'
const ImageOne = () => ( <
    Parallax className = 'image'
    blur = { 0 }
    bgImage = { Img1 }
    strength = { 800 }
    bgImageStyle = {
        { minHeight: "100vh" } } >
    <
    div className = 'content' >
    <
    span className = "img-txt" > Más que una clínica < /span> <
    /div> <
    /Parallax>
);

export default ImageOne