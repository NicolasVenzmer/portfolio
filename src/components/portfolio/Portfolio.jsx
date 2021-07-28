import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from "react"
import { useEffect } from "react"
import "./portfolio.scss"
import {
    Angular,
    React,
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])

    const list = [
        {
            id: "Angular",
            title: "Angular",
        },
        {
            id: "React",
            title: "React",
        }
    ];

    useEffect(() => {
        switch (selected) {
            case "Angular":
                setData(Angular);
                break;
            case "React":
                setData(React);
                break;
            default:
                setData(Angular);
        }
    }, [selected]);

    return (  
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <h3 id="h3">Web Pages</h3>
            <div className="container">
                {data.map((d) => (
                    <a href={d.url} target="_blank">
                    <div className="item">
                        <img
                            src={d.img}
                            alt="" />
                        <h3>{d.title}</h3>
                    </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
