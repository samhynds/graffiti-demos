import { Column, Container, Row } from "@samgl/graffiti-ui";
import Sidebar from "./Sidebar";
import "./App.css";
import Compose from "./Compose";
import Post from "./Post";

import postData from "./postData.json";

function App() {
  return (
    <Container $alignment="center" $flexDirection="row" $width="800px">
      <Row $gap="20px">
        <Column $width="280px">
          <Sidebar />
        </Column>
        <Column $width="500px">
          <Compose />
          {postData.map((post, i) => (
            <Post
              key={i}
              profileUrl={post.profileUrl}
              displayName={post.displayName}
              handle={post.handle}
              time={new Date(Date.now() - i * 1000 * 60)}
              image={post.image}
              video={post.video}
              text={post.text}
              meta={post.meta}
            />
          ))}
        </Column>
      </Row>
    </Container>
  );
}

export default App;
