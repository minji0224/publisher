import styled from "@emotion/styled";

export const StyledLayout = styled.div`
  #container {
    box-sizing: border-box;
    width: 100%;
  }

  header {
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    padding-top: 0;
    background-color: #e0e0e0;
  }

  #box {
    display: flex;
    height: 100vh;
  }

  main {
    width: 100%;
  }
`;
