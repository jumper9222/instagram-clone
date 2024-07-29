import { useContext, useEffect, useState } from "react";
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import { ProfileContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import PostActionButtons from "./PostActionButtons";
import { likePost, postComment } from "../features/posts/postsSlice";

export default function ViewPostModal({ postId, show, handleClose }) {
    const { name, image } = useContext(ProfileContext)
    const dispatch = useDispatch()
    const [comment, setComment] = useState("")

    const post = useSelector((state) => {
        return state.posts.find((post) => post.id === postId)
    })
    const [imageUrl, setImageUrl] = useState("")

    const commentHandler = (e) => {
        e.preventDefault();
        dispatch(postComment({ comment, postId }));
        setComment("")
    }

    const likeHandler = () => {
        dispatch(likePost(postId))
    }

    useEffect(() => {
        console.log(`click success`)
        if (post) {
            setImageUrl(post.image)
            console.log(`image rendered`)
        }
    }, [post])



    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"

        >
            <Modal.Body
                className="p-0 bg-light"
            >
                <Row>
                    <Col md={7}>
                        <Image
                            src={imageUrl}
                            fluid
                        />
                    </Col>
                    <Col md={5} className="p-3 ps-1">
                        <Row className="mb-3">
                            <Col sm={2}>
                                <Image
                                    className="me-2"
                                    src={image}
                                    height={"32px"}
                                    roundedCircle
                                />
                            </Col>
                            <Col sm={10} className="ps-1">
                                <strong>{name}</strong>
                            </Col>
                        </Row>
                        <div className="comments">
                            {post?.userComments?.length > 0 ? (
                                post.userComments.map((comment, i) => {
                                    return (
                                        <Row className="mb-3" key={i}>
                                            <Col md={2} className="d-flex flex-column align-items-end justify-content-start ">
                                                <Image src={image} height="28px" fluid roundedCircle />
                                            </Col>
                                            <Col md={10} className="ps-1">
                                                <span><strong>{name}</strong> {comment}</span>
                                            </Col>
                                        </Row>
                                    )
                                })
                            ) :
                                <p>No comments yet</p>
                            }
                        </div>
                        <div className="d-flex flex-row">
                            <PostActionButtons className={'bi bi-heart'} onClick={likeHandler} />
                            <PostActionButtons className={'bi bi-chat'} />
                            <PostActionButtons className={'bi bi-send'} />
                            <PostActionButtons className={'bi bi-bookmark'} isEnd />
                        </div>
                        <p>{post.likes} likes</p>
                        <div>
                            <Form onSubmit={commentHandler}>
                                <Form.Control
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder="Add a comment..."
                                />
                                <Button type="submit" variant="light ms-auto">Post</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}