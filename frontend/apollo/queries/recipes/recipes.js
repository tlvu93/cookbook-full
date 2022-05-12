import gql from 'graphql-tag';

const GET_RECIPES = gql`
  query recipes {
    recipes {
      data {
        id
      }
    }
  }
`;

export default GET_RECIPES;
