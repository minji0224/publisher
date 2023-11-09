import styled from "@emotion/styled";

export const StyledBookForm = styled.div`
  div {
    box-sizing: border-box;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 22px -8px #808080;
    border-radius: 10px;
    padding: 20px;
  }

  label {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
  }

  label > span {
    display: inline-block;
    width: 120px;
    font-size: 15px;
  }

  label > input {
    width: 100%;
    margin-left: 0;
    height: 40px;
    /* border-radius: 10px; */
    border: none;
    border-bottom: 3px solid #e0e0e0;
    font-weight: 600;
    letter-spacing: 1px;
  }

  input:focus {
    outline: none;
  }

  select {
    width: 200px;
    height: 31px;
    font-size: 15px;
  }

  select > option {
    font-size: 15px;
  }

  /* label:last-child {
    width: 400px;
    text-align: left;
  } */

  button {
    padding: 8px 16px;
    cursor: pointer;
    background-color: #e4e4e4;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    line-height: 1;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 5px;
    border-radius: 10px;
  }

  button:hover {
    border: 1px #fff;
    background-color: #1d1f20;
    color: white;
    font-weight: 600;
  }
`;
