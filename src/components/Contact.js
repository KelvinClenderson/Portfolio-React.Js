import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
    const formInitialDetails = {
        Nome: "",
        Sobrenome: "",
        email: "",
        Telefone: "",
        Mensagem: "",
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Enviar");
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Enviando...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Enviar");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if ((result.code = 200)) {
            setStatus({
                succes: true,
                message: "Mensagem enviada com sucesso",
            });
        } else {
            setStatus({
                succes: false,
                message:
                    "Algo deu errado, por favor tente novamente mais tarde ou entre em contato pelo meu Linkedin.",
            });
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <img
                                    className={
                                        isVisible
                                            ? "animate__animated animate__zoomIn"
                                            : ""
                                    }
                                    src={contactImg}
                                    alt="Contact Us"
                                />
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <h2>Entrar em contato</h2>
                                    <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col
                                                size={12}
                                                sm={6}
                                                className="px-1"
                                            >
                                                <input
                                                    type="text"
                                                    value={formDetails.Nome}
                                                    placeholder="Nome"
                                                    onChange={(e) =>
                                                        onFormUpdate(
                                                            "Nome",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Col>
                                            <Col
                                                size={12}
                                                sm={6}
                                                className="px-1"
                                            >
                                                <input
                                                    type="text"
                                                    value={
                                                        formDetails.Sobrenome
                                                    }
                                                    placeholder="Sobrenome"
                                                    onChange={(e) =>
                                                        onFormUpdate(
                                                            "Sobrenome",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Col>
                                            <Col
                                                size={12}
                                                sm={6}
                                                className="px-1"
                                            >
                                                <input
                                                    type="email"
                                                    value={formDetails.email}
                                                    placeholder="Email Address"
                                                    onChange={(e) =>
                                                        onFormUpdate(
                                                            "email",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Col>
                                            <Col
                                                size={12}
                                                sm={6}
                                                className="px-1"
                                            >
                                                <input
                                                    type="tel"
                                                    value={formDetails.Telefone}
                                                    placeholder="Telefone."
                                                    onChange={(e) =>
                                                        onFormUpdate(
                                                            "Telefone",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea
                                                    rows="6"
                                                    value={formDetails.Mensagem}
                                                    placeholder="Mensagem"
                                                    onChange={(e) =>
                                                        onFormUpdate(
                                                            "Mensagem",
                                                            e.target.value
                                                        )
                                                    }
                                                ></textarea>
                                                <button type="submit">
                                                    <span>{buttonText}</span>
                                                </button>
                                            </Col>
                                            {status.Mensagem && (
                                                <Col>
                                                    <p
                                                        className={
                                                            status.success ===
                                                            false
                                                                ? "Error"
                                                                : "Sucesso"
                                                        }
                                                    >
                                                        {status.Mensagem}
                                                    </p>
                                                </Col>
                                            )}
                                        </Row>
                                    </form>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
