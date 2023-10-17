import styled from "@emotion/styled";

export const StyledLogin = styled.div`
  #body {
    box-sizing: border-box;
    background-color: #eee;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #box {
    inline-size: 90%;
    margin-inline: auto;
    max-inline-size: 30rem;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.14902) 0px 1px 1px 0px,
      rgba(0, 0, 0, 0.09804) 0px 1px 2px 0px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  label {
    width: 100%;
    height: 50px;
    display: flex;
    margin: 5px;
  }

  svg {
    display: inline-block;
    font-size: 50px;
    margin: 0;
    width: 15%;
  }

  input {
    border: none;
    width: 85%;
    border-bottom: 1px solid #757575;
  }

  input:focus {
    outline: none;
  }

  button {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 10px;
    margin: 5px;
  }
`;
