import { Column, IconButton, ProfilePic, Row } from "@samgl/graffiti-ui";
import styled from "styled-components";
import {
  ClockClockwise,
  FilmStrip,
  Gif,
  ImageSquare,
  ListChecks,
  Smiley,
} from "@phosphor-icons/react";

const StyledCompose = styled.div`
  padding-bottom: 20px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.accents.border};
`;

// Override the default styles of the graffiti-ui IconButton component
const CustomStyledIconButton = styled(IconButton)`
  color: ${({ theme }) => theme.palette.slate[400]};
`;

const ComposeTextarea = styled.textarea`
  border: none;
  outline: none;
  background: none;
  color: ${({ theme }) => theme.palette.slate[700]};
  font-size: 16px;
  padding: 8px 8px 8px 0;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.heading};
  min-height: 40px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.palette.slate[400]};
  }

  &:focus {
    color: ${({ theme }) => theme.palette.slate[700]};
  }
`;

const composeButtons = [
  { icon: <ImageSquare />, onClick: () => {} },
  { icon: <Gif />, onClick: () => {} },
  { icon: <FilmStrip />, onClick: () => {} },
  { icon: <ClockClockwise />, onClick: () => {} },
  { icon: <Smiley />, onClick: () => {} },
  { icon: <ListChecks />, onClick: () => {} },
];

function Compose() {
  return (
    <StyledCompose>
      <Row $gap="16px">
        <ProfilePic src="avatars/1.png" $size="40px" alt="Your profile pic" />
        <Column $gap="16px" $flexGrow="1">
          <ComposeTextarea rows={1} placeholder="What's happening?" />
          <Row $gap="16px">
            {composeButtons.map((button, i) => (
              <CustomStyledIconButton key={i} {...button} />
            ))}
          </Row>
        </Column>
      </Row>
    </StyledCompose>
  );
}

export default Compose;
