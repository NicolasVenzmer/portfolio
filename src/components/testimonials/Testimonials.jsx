import "./testimonials.scss";

export default function Testimonials() {
    const data = [
        {
            id: 1,
            name: "Intermediate",
            title: "Oral, Writting and Speaking.",
            img:
                "https://i.ibb.co/qmHRDy4/germany-flag.jpg",
            icon: "assets/twitter.png",
            desc:
                "I went to a German school throughout my childhood until I was 12 years old.",
        },
        {
            id: 2,
            name: "Advanced",
            title: "Oral, Writting and Speaking.",
            img:
                "https://i.ibb.co/jZphKr0/us-flag.jpg",
            icon: "assets/youtube.png",
            desc:
                "I use English on a daily basis since I use all the tools in this language, both in the workplace and personally.",
            featured: true,
        },
        {
            id: 3,
            name: "Native",
            title: "Oral, Writting and Speaking.",
            img:
                "https://i.ibb.co/D4w8JZ1/argentina-flag.jpg",
            icon: "assets/linkedin.png",
            desc:
                "My everyday language.",
        },
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Languages</h1>
            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/right-arrow.png" className="left" alt="" />
                            <img
                                className="user"
                                src={d.img}
                                alt=""
                            />
                            <img className="right" src={d.icon} alt="" />
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
