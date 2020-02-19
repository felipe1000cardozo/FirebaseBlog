import styled from "styled-components";

export const RegisterTitle = styled.form`
  margin-top: 30px;
  margin-bottom: 5px;
  text-align: center;
`;

export const RegisterForm = styled.form`
  width: 100%;
  max-width: 680px;
  margin: 0px auto 0;
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
    font-size: 15px;
  }
  button {
    padding: 10px 20px;
    border-radius: 4px;
    border: 0;
    background-color: #272727;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
  }
`;
