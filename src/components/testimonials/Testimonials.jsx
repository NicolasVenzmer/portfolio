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
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
            id: 2,
            name: "Advanced",
            title: "Oral, Writting and Speaking.",
            img:
                "https://i.ibb.co/jZphKr0/us-flag.jpg",
            icon: "assets/youtube.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
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
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
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
