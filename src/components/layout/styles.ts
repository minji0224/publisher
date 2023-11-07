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
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px 0px 20px;
    padding-top: 0;
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
`;
