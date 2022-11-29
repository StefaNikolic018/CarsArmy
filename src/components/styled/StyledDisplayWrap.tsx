import { memo } from "react";
import styled from "styled-components";
import { device } from "./device";

const StyledDisplayWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5%;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 10%;
  @media ${device.laptop} {
    width: 100%;
    align-items: unset;
  }
  h1 {
    font-weight: bold;
    font-color: rgba(0, 0, 0, 0.7);
  }
  .car-card {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 1rem;
    border-radius: 1rem;
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
    text-align: center;
    img {
      height: 90px;
      width: 150px;
    }
    p {
      text-align: center;
      color: #434550;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 2rem;
      @media ${device.laptopL} {
        font-size: 1.5rem;
      }
      @media ${device.laptop} {
        font-size: 1.8rem;
      }
      @media ${device.tablet} {
        font-size: 1.3rem;
      }
    }
    h1 {
      color: #565656;
      font-weight: 900;
    }
  }
`;
export default memo(StyledDisplayWrap);
