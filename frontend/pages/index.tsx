import { useEffect } from 'react';
import Container from '../components/Container';
import InspirationList from '../components/InspirationList';
import Layout from '../components/Layout';
import Searchbar from '../components/Searchbar';

const IndexPage = () => {
  useEffect(() => {}, []);

  return (
    <Layout title='Home | Cookbook'>
      <Searchbar />
      <Container> Hello </Container>
      <InspirationList />
    </Layout>
  );
};

export default IndexPage;
