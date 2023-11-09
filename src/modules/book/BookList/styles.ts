import styled from "@emotion/styled";

export const StyledBookList = styled.div`
  div {
    padding: 20px;
  }

  h3 {
    margin-top: 0;
    letter-spacing: 1px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    font-size: 30px;
    font-weight: bold;
  }

  form {
    margin-bottom: 20px;
    box-shadow: 0px 0px 22px -8px #808080;
    border-radius: 10px;
    height: 150px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .querybox {
    height: 50%;
    padding: 20px;
    display: flex;
    align-items: center;
  }

  .querybox span {
    display: inline-block;
    width: 100px;
    margin-right: 20px;
  }

  .querybox select {
    width: 150px;
    height: 30px;
    margin-right: 20px;
  }

  .querybox input {
    width: 300px;
    height: 30px;
    padding: 0;
    border: 1px solid gray;
    margin-right: 20px;
  }

  .querybox button {
    background-color: white;
    border-radius: 0.2rem;
    cursor: pointer;
    color: black;
    font-size: 14px;
    line-height: 1;
    border: none;
    border: 1px solid gray;
    width: 35px;
    height: 35px;
    padding: 0;
    align-items: center;
    margin: 1px;
  }

  .querybox button svg {
    width: 60%;
    height: 60%;
    stroke-width: 15px;
  }

  .querybox button:hover {
    border: 1px #fff;
    background-color: #1d1f20;
    color: white;
  }

  .radiobox {
    display: inline-flex;
  }

  .radiobox span {
    display: inline-block;
    width: 100px;
    margin-right: 20px;
  }

  .radiobox input {
    display: none;
  }

  .radiobox label {
    text-align: center;
    padding: 8px 16px;
    cursor: pointer;
    background-color: #e4e4e4;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    line-height: 1;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3),
      0 1px rgba(255, 255, 255, 0.1);
    width: 37px;
  }

  .radiobox label:hover {
    box-shadow: none;
    border: 1px #fff;
    background-color: #1d1f20;
    color: white;
    font-weight: 600;
  }

  .radiobox input:checked + label {
    border: 1px #fff;
    background-color: #1d1f20;
    color: white;
    box-shadow: none;
  }

  table {
    border-collapse: collapse;
    text-align: center;
    box-shadow: 0px 0px 22px -8px #808080;
    width: 100%;
    border-radius: 10px;
  }

  tr {
    display: table-row;
    vertical-align: inherit;
    height: 50px;
  }

  th {
    border-bottom: 1px solid #e0e0e0;
  }

  tr:hover td {
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    /* background-color: #e0e0e0; */
    background-color: #1d1f20;
    color: white;
    /* cursor: pointer; */
  }

  td {
    display: table-cell;
    vertical-align: inherit;
  }

  p {
    color: black;
  }
`;
