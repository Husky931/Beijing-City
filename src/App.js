import React, { useRef, useEffect } from 'react';
import {Navbar}  from './navigation-components/Navbar'
import Home from './pages/Home'
import { Attraction }  from './pages/Attraction'
import { Tours } from './pages/Tours'
import { Museums } from './pages/Museum'
import {Foods} from './pages/Foods'
import {Nightlife} from './pages/Nightlife'
import {Maps} from './pages/Maps'
import { FooterMain } from './footer/FooterMain'
import Error from './pages/Error'

import AttractionTemplatePage from './attraction-components/AttractionTemplatePage'
import MuseumSinglePage from './museum-components/MuseumSinglePage'

import allTheMuseumData from './museum-components/ThumbnailsData'


import { Switch, Route } from 'react-router-dom';

export default function App() {

  const ref = useRef()

  useEffect(() => {
    if (ref.current.checked === true) {
      ref.current.checked = false
    }
  })

  return (
    <>
      <Navbar ref={ref} />
      
      <Switch >
      <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/attractions'>
          <Attraction ref={ref} />
        </Route>
        <Route exact path='/attractions/:slug'>
          <AttractionTemplatePage />
        </Route>  
        <Route path='/tours'>
          <Tours ref={ref} />
        </Route>
        <Route exact path='/museum'>
          <Museums ref={ref} />
        </Route>
        <Route exact path='/museum/:smug'>
          <MuseumSinglePage allTheMuseumData={allTheMuseumData} />
        </Route>
        <Route path='/foods'>
          <Foods ref={ref} />
        </Route>
        <Route path='/nightlife'>
          <Nightlife ref={ref} />
        </Route>
        <Route path='/maps'>
          <Maps ref={ref} />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    <FooterMain />
    </>
  );
}





