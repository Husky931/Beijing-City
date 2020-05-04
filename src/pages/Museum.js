import React, { useState, useEffect } from 'react';

import MusemFormsField from '../museum-components/MuseumFormsField'
import MuseumBody from '../museum-components/MuseumBody'

import allTheData from '../museum-components/ThumbnailsData'

export default function Museums() {

  const [sortedMuseum, setSortedMuseum] = useState(allTheData)

  const [museumTotal, setMuseumTotal] = useState({
    museum: allTheData,
    district: 'all',
    price: 0,
    minPrice: 0,
    maxPrice: 200,
    kids: false,
    free: false
  })

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const name = e.target.name
   
    setMuseumTotal({
      ...museumTotal,
      [name]: value,
    })
  }

  useEffect(() => {
    let { museum, district, price, kids, free } = museumTotal

    let tempMuseum = [...museum]

    if (district !== 'all') {
        tempMuseum = tempMuseum.filter(f => f.district === district)
    }
    
    tempMuseum = tempMuseum.filter(f => f.price >= price)

    if (kids) {
      tempMuseum = tempMuseum.filter(f => f.kids === true)
    }

    if (free) {
      tempMuseum = tempMuseum.filter(f => f.free === true)
    }

    setSortedMuseum(tempMuseum)
  },[museumTotal])

  return (
    <div className='museum-full-background-div'>
      <h1 className='search-museum-top-header'>Search Museums</h1>
      <div className='museum-line-top'></div>
      <MusemFormsField museumTotal={museumTotal} handleChange={handleChange} sortedMuseum={sortedMuseum} />
      <MuseumBody sortedMuseum={sortedMuseum} />
    </div>
  );
}
