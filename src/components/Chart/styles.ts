import styled from "@emotion/styled";

export const StyledChart = styled.div`
  #container {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  #box {
    display: flex;
    justify-content: space-between;
  }

  #box-2 {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    justify-content: space-between;
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

  #title {
    height: 200px;
    padding: 10px;
  }

  #pieChart {
    border-radius: 10px;
    height: 630px;
    width: 700px;
    padding: 10px;
    box-shadow: 0px 0px 22px -8px #808080;
  }

  #lineChart {
    box-shadow: 0px 0px 22px -8px #808080;
    height: 400px;
    width: 850px;
    padding: 10px;
    border-radius: 10px;
  }
`;
