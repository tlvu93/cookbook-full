import { useRouter } from 'next/router';

const Recipe = () => {
  const router = useRouter();
  console.log(router.query.recipe);
  return <div>Recipe</div>;
};

export default Recipe;
