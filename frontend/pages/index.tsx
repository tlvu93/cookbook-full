import Container from '../components/Container';
import Layout from '../components/Layout';
import Searchbar from '../components/Searchbar';

const IndexPage = () => (
  <Layout title='Home | Cookbook'>
    <Searchbar />
    <Container> Hello </Container>
  </Layout>
);

export default IndexPage;
