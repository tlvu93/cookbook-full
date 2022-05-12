import { useQuery } from '@apollo/client';

import Container from '../components/Container';
import InspirationList from '../components/InspirationList';
import Layout from '../components/Layout';
import Searchbar from '../components/Searchbar';
import GET_RECIPES from '../apollo/queries/recipes/recipes';

const IndexPage = () => {
  const { loading, error, data } = useQuery(GET_RECIPES);
  return (
    <Layout title='Home | Cookbook'>
      <Searchbar />
      <Container> Hello </Container>
      {!loading && <InspirationList {...data} />}
    </Layout>
  );
};

export default IndexPage;
