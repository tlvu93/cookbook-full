import Link from 'next/link';
import Layout from '../components/Layout';
import Searchbar from '../components/Searchbar';

const IndexPage = () => (
  <Layout title='Home | Next.js + TypeScript Example'>
    <Searchbar />
    <h1 className='text-3xl font-bold underline'> Hello world! </h1>
    <p>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
