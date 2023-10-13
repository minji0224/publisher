import styled from "@emotion/styled";

export const StyledProductList = styled.div`
  div {
    padding: 20px;
  }

  table {
    border-collapse: collapse;
    text-align: center;
    box-shadow: 0px 0px 20px -3px rgba(0, 0, 0, 1);
    width: 100%;
    border-radius: 10px;
  }

  th {
    border-bottom: 1px solid #e0e0e0;
  }

  tr {
    display: table-row;
    vertical-align: inherit;
  }

  tr:hover td {
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    background-color: #e0e0e0;
    cursor: pointer;
  }

  td {
    display: table-cell;
    vertical-align: inherit;
  }

  p {
    color: black;
  }
`;
