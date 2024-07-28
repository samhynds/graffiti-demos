import styled from "styled-components";
import {
  ProfilePic,
  Row,
  Column,
  IconButton,
  Time,
  Video,
} from "@samgl/graffiti-ui";
import {
  BookmarkSimple,
  ChartBar,
  Chat,
  Heart,
  Repeat,
  Share,
} from "@phosphor-icons/react";
import PostMetaStat from "./PostMetaStat";

interface PostProps {
  profileUrl: string;
  displayName: string;
  handle: string;
  time: Date;
  text: string | null;
  image: string | null;
  video: string | null;
  meta: {
    likes: string;
    reposts: string;
    replies: string;
    views: string;
  };
}

const StyledPost = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.accents.border};
`;

const StyledPostAuthor = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.accents.heading};
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
  font-weight: 500;
`;

const StyledPostAuthorHandle = styled.span`
  color: ${({ theme }) => theme.palette.slate[500]};
  font-size: 12px;
  font-weight: 400;
`;

const StyledTime = styled(Time)`
  color: ${({ theme }) => theme.palette.slate[500]};
  font-size: 12px;
  font-weight: 400;
`;

const StyledPostContent = styled.div`
  color: ${({ theme }) => theme.accents.text};
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 8px;

  img {
    border-radius: 8px;
    margin-top: 8px;
    max-width: 100%;
    height: auto;
  }

  video {
    margin-top: 8px;
  }
`;

function Post({
  profileUrl,
  displayName,
  handle,
  time,
  text,
  image,
  video,
  meta: { likes, reposts, replies, views },
}: PostProps) {
  return (
    <StyledPost>
      <Row $gap="16px">
        <Column>
          <ProfilePic src={profileUrl} $size="40px" alt="Your profile pic" />
        </Column>
        <Column $gap="4px" $flexGrow="1">
          <Row $justifyContent="space-between" $alignItems="center">
            <StyledPostAuthor>
              {displayName}
              <StyledPostAuthorHandle>@{handle}</StyledPostAuthorHandle>
            </StyledPostAuthor>
            <StyledTime date={time} relative={true} />
          </Row>
          <StyledPostContent>
            {text}
            {image && <img src={image} alt="Post image" />}
            {video && (
              <Video
                $width="100%"
                $height="auto"
                sources={[{ src: video, type: "video/mp4" }]}
                $showControls="always"
              />
            )}
          </StyledPostContent>
          <Row $justifyContent="space-between">
            <Row $gap="48px">
              <PostMetaStat icon={<Heart weight="light" />} text={`${likes}`} />
              <PostMetaStat
                icon={<Repeat weight="light" />}
                text={`${reposts}`}
              />
              <PostMetaStat
                icon={<Chat weight="light" />}
                text={`${replies}`}
              />
              <PostMetaStat
                icon={<ChartBar weight="light" />}
                text={`${views}`}
              />
            </Row>
            <Row $gap="32px">
              <IconButton
                icon={<BookmarkSimple weight="light" />}
                onClick={() => {}}
              />
              <IconButton icon={<Share weight="light" />} onClick={() => {}} />
            </Row>
          </Row>
        </Column>
      </Row>
    </StyledPost>
  );
}

export default Post;
