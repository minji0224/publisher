import styled from "@emotion/styled";

export const StyledSidebar = styled.div`
  #viewport {
    border: 3px solid black;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
    height: 100%;
  }

  #sidebar {
    border: 1px solid red;
    left: 250px;
    width: 250px;
    height: 100%;
    overflow-y: auto;
    background: #37474f;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  #sidebar header {
    background-color: #263238;
    font-size: 20px;
    line-height: 52px;
    text-align: center;
  }

  #sidebar header a {
    color: #fff;
    display: block;
    text-decoration: none;
  }
`;
