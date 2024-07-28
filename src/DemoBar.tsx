import { Row } from "@samgl/graffiti-ui";
import styled from "styled-components";
import { Info } from "@phosphor-icons/react";

const StyledDemoBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
  background-color: ${({ theme }) => theme.palette.blue[100]};
  border-bottom: 1px solid ${({ theme }) => theme.palette.blue[300]};
  color: ${({ theme }) => theme.palette.blue[900]};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 16px;
  z-index: 100;
  font-weight: 500;
  font-size: 14px;

  a {
    color: ${({ theme }) => theme.palette.blue[900]};

    &:hover {
      background-color: ${({ theme }) => theme.palette.blue[200]};
      color: ${({ theme }) => theme.palette.blue[950]};
    }
  }
`;

function DemoBar() {
  return (
    <StyledDemoBar>
      <Row $gap="8px">
        <Info weight="light" width={20} height={20} />
        <div>
          This is a demo app made with Graffiti UI. Check out the library at{" "}
          <a href="https://github.com/samhynds/graffiti-ui">
            https://github.com/samhynds/graffiti-ui
          </a>
        </div>
      </Row>
    </StyledDemoBar>
  );
}

export default DemoBar;
