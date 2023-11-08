import styled from "@emotion/styled";

export const StyledChart = styled.div`
  #container {
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }

  #box {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
  }

  #div {
    height: 200px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 22px -8px #808080;
    border-radius: 10px;
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
