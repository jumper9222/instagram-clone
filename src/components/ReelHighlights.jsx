import { Container, Image } from "react-bootstrap";

export default function ReelHighlights({ highlights }) {

    return (
        <Container
            className="d-flex gap-4 mb-3"
        >
            {highlights.map((highlight, i) => (
                <div key={i} className="d-flex flex-column align-items-center text-align-center">
                    <Image
                        src={highlight.image}
                        height={"50px"}
                        className="mb-1"
                        roundedCircle
                    />
                    <p style={{ fontSize: "13px", fontWeight: 600 }}>{highlight.title}</p>
                </div>
            ))}
        </Container>
    )
}