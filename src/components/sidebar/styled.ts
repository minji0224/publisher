import styled from "@emotion/styled";

export const StyledSidebar = styled.div`
  div {
    box-sizing: border-box;
    width: 14rem;
    height: 100vh;
    border-right: 1px solid rgba(0, 0, 0, 0.07);
    box-shadow: 0 0px 24px 0 rgb(0 0 0 / 6%), 0 1px 0px 0 rgb(0 0 0 / 2%);
    padding: 20px;
  }

  div > ul {
    cursor: pointer;
    min-height: 2.3rem; // 고정 높이 대신 최소 높이 사용
    margin: 0;
    text-align: center;
    list-style: none;
    padding: 0;
    transition: min-height 0.3s;
    /* padding-left: 20px; */
    /* margin-left: 20px; */
    /* padding-inline-start: 40px; */
  }

  svg {
    font-size: 20px;
    text-align: right;
  }

  div > ul > li {
    height: 2.3rem;
    border-bottom: 3px solid #797979;
  }

  div > ul > li:hover {
    background-color: #e1e1e1;
  }

  div > ul > ul {
    padding: 0;
  }

  div > ul > ul > li {
    text-align: center;
    list-style: none;
    height: 2.3rem;
    border-bottom: 0px solid #e1e1e1;
  }

  div > ul > ul > li:hover {
    background-color: #e1e1e1;
  }
`;
