import { Forma } from '../../components/Form/Form';
import { Contacts } from '../../components/Contacts/Contacts';
import { Filter } from '../../components/Filter/Filter';
import { Grid, Title, Box } from './ContactsPage.styled';
import Container from '@mui/material/Container';
import { useAddContactForm } from 'hooks/useAddContactForm';

export default function ContactsPage() {
  const { register, handleSubmit, errors, isLoading, onSubmit } =
    useAddContactForm();
  return (
    <Container>
      <Box>
        <Title>Phonebook</Title>
      </Box>
      <Grid>
        <Forma
          btnText="Add contact"
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
        <Filter />
        <Contacts />
      </Grid>
    </Container>
  );
}
