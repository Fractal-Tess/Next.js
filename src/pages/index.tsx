import StyledText from '$components/text/StyledText';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="A sample description about the page"
        />
      </Head>
      <div className="flex-1 flex flex-col items-center justify-center select-none space-y-4 text-5xl">
        <h1 className="text-6xl font-bold">
          Welcome to <StyledText>Next.js 12</StyledText>
        </h1>
        <p>This is the Home page</p>
      </div>
    </>
  );
};

export default Home;
