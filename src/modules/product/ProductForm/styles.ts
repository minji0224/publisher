import styled from "@emotion/styled";

export const StyledProductForm = styled.div`
  div {
    box-sizing: border-box;
    border: 1px solid black;
    padding: 20px;
  }

  form {
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    font-size: 20px;
  }

  label > input {
    width: 100%;
    margin-left: 0;
    height: 40px;
    border-radius: 4px;
  }

  select {
    width: 200px;
    height: 31px;
    font-size: 20px;
  }

  select > option {
    font-size: 20px;
  }

  /* button {
 
  } */
`;
