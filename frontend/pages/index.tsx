import { useQuery } from '@apollo/client';

import Container from '../components/Container';
import InspirationList from '../components/InspirationList';
import Layout from '../components/Layout';
import Searchbar from '../components/Searchbar';
import { GET_RECIPES_OVERVIEW } from '../apollo/queries/recipes/recipes';

const IndexPage = () => {
  const { loading, error, data } = useQuery(GET_RECIPES_OVERVIEW);
  return (
    <Layout title='Home | Cookbook'>
      <Searchbar />
      <Container> Hello </Container>
      <InspirationList {...data} loading={loading} />
    </Layout>
  );
};

export default IndexPage;
