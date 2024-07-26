import { Tab, Tabs } from "react-bootstrap";
import ImageGrid from "./ImageGrid";

export default function UserPosts() {


    return (
        <Tabs
            defaultActiveKey="posts"
            id="uncontrolled-tab-example"
            className="mb-3 justify-content-center"
        >
            <Tab eventKey={"posts"} title={"POSTS"}>
                <ImageGrid />
            </Tab>
            <Tab eventKey={"reels"} title={"REELS"}>Reels</Tab>
            <Tab eventKey={"tagged"} title={"TAGGED"}>
                <ImageGrid />
            </Tab>
        </Tabs>
    )
}