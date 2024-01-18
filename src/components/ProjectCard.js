import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
    return (
        <Col sm={6} md={4}>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="proj-imgbx-link">
                <div className="proj-imgbx">
                    <img src={imgUrl} alt={title} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    );
}
