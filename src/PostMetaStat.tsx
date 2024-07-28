import styled from "styled-components";
import { IconButton } from "@samgl/graffiti-ui";

interface PostMetaStatProps {
  icon: React.ReactNode;
  text?: string;
  onClick?: () => void;
}

const StyledPostMetaStat = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.palette.slate[500]};
  font-size: 12px;
`;

const StyledPostMetaStatIcon = styled(IconButton)`
  color: ${({ theme }) => theme.palette.slate[500]};
`;

function PostMetaStat({ icon, text, onClick = () => {} }: PostMetaStatProps) {
  return (
    <StyledPostMetaStat>
      <StyledPostMetaStatIcon icon={icon} onClick={onClick} />
      {text}
    </StyledPostMetaStat>
  );
}

export default PostMetaStat;
