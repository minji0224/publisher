import styled from "@emotion/styled";

export const StyledPagination = styled.div`
  #pageBtn {
    text-align: center;
    padding: 0;
  }

  #pageBtn button {
    border-radius: 0.2rem;
    cursor: pointer;
    color: black;
    font-size: 14px;
    line-height: 1;
    border: none;
    margin: 5px;
    border: 1px solid gray;
    width: 35px;
    height: 35px;
  }

  #pageBtn button:hover {
    border: 1px #fff;
    background-color: #1d1f20;
    color: white;
  }
`;
