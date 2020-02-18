import styled from "styled-components";

export const Post = styled.section`
  width: 100%;
  max-width: 930px;
  margin: 0 auto;
  padding: 0 30px;

  article {
    background-color: #fff;
    border: 1px solid #ddd;
    margin-top: 30px;
    margin-bottom: 10px;
    header {
      padding: 20px;
      display: flex;
      align-items: center;
      strong {
        display: flex;
        flex-direction: column;
      }
      span {
        font-size: 13px;
        padding-top: 5px;
      }
    }
    img {
      width: 100%;
    }
    footer {
      padding: 20px;
      word-wrap: break-word;
    }
  }
`;
