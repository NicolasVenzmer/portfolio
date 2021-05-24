import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons";

export default function topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">passionate.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>11-5488-9200</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>nicovenz@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
