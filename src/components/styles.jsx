import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ffc1cc;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const Button = styled.button`
  background-color: #ff4081;
  color: #333;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  width: 100%;
`;
