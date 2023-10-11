import styled from "@emotion/styled";

export const LayoutStyle = styled.div`
  #container {
    box-sizing: border-box;
    /* border: 1px solid black; */
    width: 100%;
    /* height: 100%; */
  }

  header {
    /* border: 1px solid black; */
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    padding-top: 0;
  }

  /* header > a {
    border: 1px solid black;
  } */

  #box {
    /* border: 3px solid brown; */
    display: flex;
    height: 100vh;
  }

  main {
    border: 1px solid red;
    width: 100%;
  }
`;
