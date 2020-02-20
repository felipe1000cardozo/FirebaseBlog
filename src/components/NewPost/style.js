import styled from "styled-components";

export const New = styled.main`
  header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 680px;
    margin: 30px auto 10px;
    a {
      background-color: #272727;
      padding: 8px 18px 8px;
      border-radius: 5px;
      color: #fff;
      text-decoration: none;
      font-size: 15px;
    }
  }

  form {
    width: 100%;
    max-width: 680px;
    background-color: #fff;
    margin: 0 auto;
    padding: 30px;
    border-radius: 4px;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    span {
      text-align: center;
      color: #ff0000;
      font-size: 15px;
    }
    input {
      margin-bottom: 10px;
      height: 40px;
      border-radius: 4px;
      border: 1px solid #ddd;
      padding: 0 20px;
    }
    label {
      margin-bottom: 8px;
    }
    textarea {
      height: 80px;
      border-radius: 5px;
      border: 1px solid #ddd;
      padding: 0 20px;
    }
    button {
      margin-top: 10px;
      padding: 10px 20px;
      border-radius: 4px;
      border: 0;
      background-color: #272727;
      color: #fff;
      font-weight: bold;
      font-size: 17px;
      cursor: pointer;
    }
  }
`;
