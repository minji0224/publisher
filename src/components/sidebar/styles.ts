import styled from "@emotion/styled";

export const StyledSidebar = styled.div`
  div {
    box-sizing: border-box;
    width: 14rem;
    height: 100vh;
    border-right: 1px solid rgba(0, 0, 0, 0.07);
    box-shadow: 0 0px 24px 0 rgb(0 0 0 / 6%), 0 1px 0px 0 rgb(0 0 0 / 2%);
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* 
  ul:first-of-type:hover {
    background-color: #e0e0e0;

  } */

  div > ul {
    cursor: pointer;
    min-height: 2.3rem; // 고정 높이 대신 최소 높이 사용
    margin: 0;
    list-style: none;
    transition: min-height 0.3s;
    padding: 0;
    width: 100%;
  }

  div > ul > li:hover {
    background-color: #e0e0e0;
    border-radius: 10px;
  }

  div > ul > li:first-of-type {
    background-color: #e0e0e0;
    border-radius: 10px;
  }

  p {
    display: inline-block;
    margin: 0;
    text-align: center;
    align-items: center;
    height: 100%;
  }

  svg {
    font-size: 20px;
  }

  div > ul > li {
    height: 2.3rem;
    border-bottom: 1px solid #e0e0e0;
  }

  div > ul > ul {
    padding: 0;
  }

  div > ul > ul > li {
    text-align: center;
    list-style: none;
    height: 2.3rem;
    margin-top: 10px;
  }

  div > ul > ul > li:hover {
    background-color: #e0e0e0;
    border-radius: 10px;
  }

  a {
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: none;
    display: inline-block;
  }
`;
