import gql from 'graphql-tag';

const GET_RECIPES_OVERVIEW = gql`
  query recipes {
    recipes {
      data {
        id
        attributes {
          recipe_name
          description
          images {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const GET_RECIPES_FULL = gql`
  query recipes {
    recipes {
      data {
        id
        attributes {
          recipe_name
          description
          images {
            data {
              attributes {
                url
              }
            }
          }
          recipe_ingredients {
            amount
            ingredient {
              data {
                attributes {
                  ingredient_name
                  kcal
                  carbohydrates
                  protein
                  fat
                }
              }
            }
          }
        }
      }
    }
  }
`;

export {GET_RECIPES_FULL, GET_RECIPES_OVERVIEW};
