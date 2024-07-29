import { Button, Col, Container, Image, Row } from "react-bootstrap";
import IconButton from "./components/IconButtons";
import ProfileHeader from "./components/ProfileHeader";
import { createContext, useState } from "react";
import { HIGHLIGHTS_DATA, PROFILE_DATA } from "./data";
import UserPosts from "./components/UserPosts";
import ReelHighlights from "./components/ReelHighlights";
import AddPostModal from "./components/AddPostModal";

export const ProfileContext = createContext(null);

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <ProfileContext.Provider value={PROFILE_DATA}>
      <Row>
        <Col
          sm={1}
          className="d-flex flex-column justify-content-start align-items-center vh-100 bg-light"
          style={{ position: "sticky", top: 0 }}
        >
          <IconButton className="bi bi-instagram" isTop />
          <IconButton className="bi bi-house" />
          <IconButton className="bi bi-search" />
          <IconButton className="bi bi-compass" />
          <IconButton className="bi bi-film" />
          <IconButton className="bi bi-chat" />
          <IconButton className="bi bi-heart" />
          <IconButton className="bi bi-plus-square" onClick={openModal} />
          <Button variant='light' style={{ marginBottom: "7px" }} >
            <Image src='https://sig1.co/logo-1' height="28px" roundedCircle />
          </Button>
          <IconButton className="bi bi-list" isBottom />
        </Col>
        <Col sm={11}>
          <Container>
            <ProfileHeader />
            <ReelHighlights highlights={HIGHLIGHTS_DATA} />
            <UserPosts />
            <AddPostModal show={showModal} handleClose={closeModal} />
          </Container>
        </Col>
      </Row>
    </ProfileContext.Provider >
  )
}