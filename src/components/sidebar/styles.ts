import styled from "@emotion/styled";

export const StyledSidebar = styled.div`
  #sidebar {
    width: 200px;
    height: 100%;
    background: #f3f6fd;
    border-radius: 10px;
    padding: 16px;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  header {
    border: 1px solid black;
    margin: 0;
    padding: 0;
    padding: 15px;
    line-height: 52px;
    background-color: #fff;
  }
  header span {
    border: 1px solid black;
    display: inline-block;
    display: block;
  }
  svg {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    stroke-width: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    padding: 15px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: black;
  }

  a:hover {
    color: gray;
  }
`;
