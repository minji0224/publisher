import styled from "@emotion/styled";

export const StyledBookForm = styled.div`
  div {
    box-sizing: border-box;
    padding: 20px;
  }

  h3 {
    letter-spacing: 1px;
    box-shadow: 0px 0px 20px -3px rgba(0, 0, 0, 1);
    padding: 10px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 20px -3px rgba(0, 0, 0, 1);
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

  /* button {
 
  } */
`;
