import styled from "@emotion/styled";

export const StyledLayout = styled.div`
  #layout {
    box-sizing: border-box;
    width: 100%;
    display: flex;
  }

  #header {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #header header {
    height: 2rem;
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 0 20px 0 0;
  }

  #logoutBtn {
    all: initial;
    width: 30px;
    height: 30px;
  }

  #logoutBtn svg {
    width: 100%;
    height: 100%;
    stroke-width: 15px;
  }
  #logoutBtn:hover {
    color: #7380ec;
    cursor: pointer;
  }

  main {
    background-color: #f6f6fc;
  }
`;
