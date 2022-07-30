import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  place-items: center;
  justify-content: space-between;
  min-width: 50vw;
  padding: 10px;
  //   border: 2px solid #fff;
  font-weight: 700;
  font-size: 26px;

  .themeChange {
    display: flex;
    place-items: center;
    justify-content: center;
    gap: 15px;
    font-size: 13px;
    letter-spacing: 2.5px;
    cursor: pointer;
  }
`;
