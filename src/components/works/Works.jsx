import "./works.scss"
import { useState } from "react";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/logo-udemy.jfif",
            title: "Universidad JavaScript 2021 - Udemy",
            desc:
                "The following certificate was made by my own interest.",
            desc2:
                "Obtained in 2021",
            img:
                "https://i.ibb.co/BcdZ7QW/Certificado-Java-Script-de-Cero-a-Master-2021.jpg",
        },
        {
            id: "2",
            icon: "./assets/CiscoCertified_Logo.jpg",
            title: "Cisco Certification CCNA 1",
            desc:
                "The following certificate was made at UADE.",
            desc2:
                "Obtained in 2018",
            img:
                "https://i.ibb.co/xHgGyYP/Certificado-3.jpg",
        },
        {
            id: "3",
            icon: "./assets/CiscoCertified_2_Logo.jpg",
            title: "Cisco Certification CCNA 2",
            desc:
                "The following certificate was made at UADE.",
            desc2:
                "Obtained in 2018",
            img:
                "https://i.ibb.co/jk9pGKG/Certificado-4.jpg",
        },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="works" id="works">
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>{d.desc2}</span>
                                </div>
                            </div>
                            <div className="right">
                                <img
                                    src={d.img}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src="assets/arrow.png"
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src="assets/arrow.png"
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    )
}
