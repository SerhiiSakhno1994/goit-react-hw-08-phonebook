import styled from '@emotion/styled';
import { FormControl } from '@mui/material';
import { Container } from '@mui/system';
import { BtnSubmitForm } from 'components/Form/Form.styled';
export const FormContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
`;
export const Box = styled.div`
  width: 50%;
`;
export const RedisterForm = styled.form`
  padding: 30px 15px;
  /* margin-bottom:30px; */
  border: 1px solid #6d6d6c;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #f0f8ff;
  border: none;
`;
export const Field = styled(FormControl)`
  margin-bottom: 10px;
`;
export const Btn = styled(BtnSubmitForm)`
  align-self: center;
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
export const LogIcon = styled.div`
  background-color: #1565c0;
  color: white;
  border-radius: 50%;
  padding: 17px;
`;
export const FormTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0 20px 0;
`;
export const TitleText = styled.h1`
  margin: 3px 0 0 0;
  color: #1565c0;
`;
