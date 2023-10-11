import styled from "@emotion/styled";

export const LayoutStyle = styled.div`
  div {
    box-sizing: border-box;
    border: 1px solid black;
    width: 100%;
    height: 100vh;
  }

  header {
    border: 1px solid black;
    height: 3rem;
    display: flex;
    justify-content: space-between;
  }

  header > a {
    border: 1px solid black;
  }

  #box {
    border: 3px solid brown;
    display: flex;
  }

  nav {
    border: 1px solid blue;
    width: 14rem;
  }

  nav div {
    height: 3rem;
  }

  main {
    border: 1px solid red;
    width: 100%;
  }
`;
