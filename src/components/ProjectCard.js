import { Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
    const redirectToLink = () => {
        window.open(link, "_blank");
    };

    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <button
                        className="buttonProject py-3"
                        onClick={redirectToLink}
                    >
                        {" "}
                        Ver Projeto <ArrowRightCircle size={25} />
                    </button>
                </div>
            </div>
        </Col>
    );
};
