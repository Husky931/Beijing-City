import React from 'react';
import Hero from '../navigation-components/Hero'
import Information from '../information-components/Information';

export default function Home() {
  return (
    <>
      <Hero title={'Beijing info hub'} subtitle={'Check out our tours'} buttonText={'Click me'} pathTo={'/tours'} />
      <Information />
    </>
  );
}





