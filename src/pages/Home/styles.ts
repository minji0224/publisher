import styled from "@emotion/styled";
/* #FF3D00; #8BC34A; #FFB300; #29b6f6;   #78909C; */

export const StyledTitle = styled.div`
  #title {
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin-bottom: 10px;
  }

  .total {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    height: 30%;
    padding: 5px;
    flex: 1;
    /* border: 1px solid black; */
  }

  .total span:first-child {
    font-size: 30px;
    line-height: 32px;
    font-weight: 700;
  }

  .total span:last-child {
    color: #4a4a4a;
    font-weight: 500;
  }

  .imgDiv {
    height: 100%;
    padding: 0;
  }

  .imgDiv img {
    weight: 100%;
    overflow: hidden;
    border-radius: 10px;
  }

  .total-box {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .total-box .total {
    padding: 0;
  }

  .total-info {
    height: 100%;
    padding: 0;
  }

  .total-info span {
    margin-bottom: 10px;
  }
`;
