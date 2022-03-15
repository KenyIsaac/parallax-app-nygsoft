import { Parallax } from 'react-parallax';
import Img3 from '../img/img3.jpg'
const ImageThree = () => ( <
    Parallax className = 'image'
    blur = { 0 }
    bgImage = { Img3 }
    strength = { 800 }
    bgImageStyle = {
        { minHeight: "100vh" }
    } >
    <
    div className = 'content' >
    <
    span className = "img-txt" > Los mejores profesionales < /span> < /
    div > <
    /Parallax>
);

export default ImageThree