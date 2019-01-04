import Head from 'next/head';

import Page from '../components/Page';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Demo from '../components/Demo';
import Intro from '../components/dapp/Intro';

const Index = () => ((
  <Page>
    <Head>
      <title>Poseidon Network</title>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500" rel="stylesheet" />
    </Head>
    <Nav />
    <Intro />
    <Demo />
    <Footer />
  </Page>
));

export default Index;
