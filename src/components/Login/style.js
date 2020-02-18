import styled from "styled-components";

export const StyledLogin = styled.section`
  form {
    width: 100%;
    max-width: 680px;
    margin: 30px auto 0;
    padding: 30px;
    background-color: #fff;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 15px;
      height: 40px;
      border-radius: 4px;
      border: 1px solid #ddd;
      padding: 0 20px;
      font-size: 14px;
    }
    button {
      padding: 10px 20px;
      border-radius: 4px;
      background-color: #272727;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      border: 0;
      cursor: pointer;
    }
    a {
      text-align: center;
      text-decoration: none;
      color: #272727;
      font-size: 15px;
      margin-top: 10px;
    }
  }
`;
