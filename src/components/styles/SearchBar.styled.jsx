import styled from "styled-components";

export const SearchBarStyled = styled.form`
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1e2a47;
    border-radius: 1.1rem;
    input {
      width: 100%;
      margin: 0.5rem 1.5rem;
      background: transparent;
      outline: none;
      border: none;
      padding: 1rem 0;
      caret-color: #0079ff;
      font-size: 18px;
      color: #fff;
      ::placeholder {
        color: #fff;
      }
    }
    img {
      margin-left: 2.2rem;
    }
    button {
      margin: 0.75rem;
      padding: 0.9rem 1.75rem;
      border-radius: 10px;
      outline: none;
      border: none;
      background-color: #0079ff;
      color: #fff;
      font-weight: 700;
      font-size: 16px;
    }
  }
`;
