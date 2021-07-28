import "./intro.scss"
import { init } from 'ityped'
import { useEffect} from "react"
import { useRef } from "react"

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay:  1500,
            backSpeed: 60,
            strings: ['Angular', 'ReactJS', 'JavaScript', 'TypeScript', 'NodeJS', 'HTML', 'CSS'],
        });

    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Nicolás Venzmer</h1>
                    <h3>IT Student <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
