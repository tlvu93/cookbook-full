import Container from './Container';
import RecipeCard from './RecipeCard/RecipeCard';
import SkeletonInspirationCard from './RecipeCard/SkeletonInspirationCard';

const InspirationList = ({recipes, loading}) => {
  return (
    <Container>
      <div>
        <div>
          <h1 className="text-2xl">Inspiration</h1>
        </div>
        <div className="flex flex-wrap">
          {loading
            ? [...Array(5)].map((_, i) => (
                <SkeletonInspirationCard key={'Skeleton-' + i} />
              ))
            : recipes.data.map(data => (
                <RecipeCard key={'recipeCard-' + data.id} {...data} />
              ))}
        </div>
      </div>
    </Container>
  );
};

export default InspirationList;
