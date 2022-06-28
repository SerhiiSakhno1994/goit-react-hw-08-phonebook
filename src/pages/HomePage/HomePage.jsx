import { Container } from '@mui/system';
import { HomeSection, Title, BigTitleAccent } from './HomePage.styled';
export default function HomePage() {
  return (
    <HomeSection>
      <Container>
        <Title>
          <BigTitleAccent>Phonebook</BigTitleAccent>
        </Title>
      </Container>
    </HomeSection>
  );
}
