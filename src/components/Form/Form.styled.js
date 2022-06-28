import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
export const PaperForm = styled(Paper)`
  max-width: 500px;
  padding: 30px 20px;
  text-align: center;
  background-color: #d6e4ee;
  max-height: 250px;
  margin-bottom: 30px;
  border-radius: 20px;
`;
export const InputField = styled.input`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  width: 300px;
  padding: 10px;
  box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  color: black;
  font-size: 16px;
  padding-left: 30px;
`;
export const Label = styled.label`
  width: 100px;
  text-align: right;
  float: left;
  margin-right: 10px;
  line-height: 30px;
  color: hsl(210deg 8% 20%);
  font-weight: 900;
`;

export const Error = styled.p`
  margin: 0;
  color: tomato;
  font-size: 16px;
  text-align: center;
`;
export const BtnSubmitForm = styled(Button)`
  margin-top: 30px;
  display: inline-block;
  padding: 10px 20px;
  margin: 10px 10px;
  border-radius: 50px;
  background-image: linear-gradient(
    45deg,
    #6ab1d7 0%,
    #33d9de 50%,
    #002878 100%
  );
  background-position: 100% 0;
  background-size: 200% 200%;
  font-size: 15px;
  font-weight: 600;
  color: white;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, 0.35);
  transition: 0.5s;
  cursor: pointer;
`;
