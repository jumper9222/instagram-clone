import { Button } from "react-bootstrap";

export default function PostActionButtons({ isStart, isEnd, className, onClick }) {
    let margin = "light p-1";

    if (isStart) {
        margin = "light p-1"
    } else if (isEnd) {
        margin = "light ms-auto me-3 p-1";
    }

    return (
        <Button variant={margin} style={{ marginBottom: "7px" }} onClick={onClick} size="sm">
            <i className={className} style={{ fontSize: "18px" }}></i>
        </Button>
    )
}