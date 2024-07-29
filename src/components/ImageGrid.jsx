import { useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import UpdatePostModal from "./UpdatePostModal";
import { deletePost } from "../features/posts/postsSlice";
import ViewPostModal from "./ViewPostModal";

export default function ImageGrid() {
    // const images = useContext(ProfileContext).posts.map((post) => post.image);
    const posts = useSelector((state) => state.posts);
    const [show, setShow] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const [viewCurrentPost, setViewCurrentPost] = useState(null);
    const [viewPost, setViewPost] = useState(false);
    const dispatch = useDispatch();

    const handleClose = () => {
        setCurrentPost(null);
        setShow(false);
    }

    const handleShow = (post) => {
        setCurrentPost(post);
        setShow(true);
    }

    const handleDelete = (post) => {
        dispatch(deletePost(post))
    }

    const handleViewPost = (post) => {
        setViewCurrentPost(post);
        setViewPost(true);
    }

    const handleHidePost = () => {
        setViewCurrentPost(null);
        setViewPost(false);
    }

    const renderImages = () => {
        return posts.map((post) => (
            <Col md={4} key={post.id} className="mb-4">
                <Image src={post.image} fluid onClick={() => handleViewPost(post)} />
                <Button onClick={() => handleShow(post)} variant="outline-primary">
                    <i className="bi bi-pencil-square"></i>
                </Button>
                <Button variant="outline-danger" onClick={() => handleDelete(post)}>
                    <i className="bi bi-trash"></i>
                </Button>
            </Col>
        ));
    };

    return (
        <>
            <Row>{renderImages()}</Row>
            {currentPost && (
                <UpdatePostModal
                    show={show}
                    handleClose={handleClose}
                    postId={currentPost.id}
                />
            )}
            {viewCurrentPost && (
                <ViewPostModal
                    show={viewPost}
                    handleClose={handleHidePost}
                    postId={viewCurrentPost.id}
                />
            )
            }
        </>
    )
}