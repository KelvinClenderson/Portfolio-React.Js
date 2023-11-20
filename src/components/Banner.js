import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import headerImg from "../assets/img/header-img.svg";

import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [
        "Web Developer",
        "Back-End Developer",
        "Mobile Developer",
    ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <span className="tagline">
                                        Bem vindo ao meu Portfolio
                                    </span>
                                    <h1 className="">
                                        {`Olá! Eu me chamo Kelvin Clenderson`}{" "}
                                    </h1>
                                    <h1
                                        className="txt-rotate flex items-center justify-center h-screen animate-spin"
                                        dataPeriod="1000"
                                        data-rotate='[ "Web Developer", "Back-End Developer", "Mobile Developer" ]'
                                    >
                                        <span className="wrap">{text}</span>
                                    </h1>

                                    <p>
                                        Meu nome é Kelvin Clenderson, tenho 24
                                        anos anos e moro em Belo Horizonte/MG.
                                        estou estudando mais alto formação em
                                        Engenharia de Software. EU sempre fui um
                                        jovem fascinado pelos computadores, a
                                        curiosidade sempre foi meu ponto forte,
                                        quando entrei contato com a área de
                                        Tecnologia, resolvi me aprofundar nos
                                        cursos que poderia nutrir meu
                                        conhecimento em Back-end com linguagens
                                        como Python, C#, banco de dados SQL e em
                                        front-end como como CSS, HTML e Java
                                        Script, TypeScript usando React e
                                        Vite.js.{" "}
                                    </p>
                                    {/* <HashLink to="#connect">
                                        <button className="vvd">
                                            <span>Vamos nos conectar</span>
                                            <ArrowRightCircle size={25} />
                                        </button>
                                    </HashLink> */}
                                    <button
                                        onClick={() => console.log("connect")}
                                    >
                                        Vamos nos conectar{" "}
                                        <ArrowRightCircle size={25} />
                                    </button>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__zoomIn"
                                            : ""
                                    }
                                >
                                    <img src={headerImg} alt="Header Img" />
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
