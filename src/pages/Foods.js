import React, { useEffect } from 'react';
import FoodFatherComponent from '../foods-components/FoodFatherComponent'

import {foodText} from '../foods-components/FoodData'
import {foodImg} from '../foods-components/FoodData'
import {foodTitle} from '../foods-components/FoodData'

import Header from '../Header'

import pic3 from '../images/header3.jpg';

export const  Foods = React.forwardRef((props, ref) => {

  useEffect(() => {
    if (ref.current.checked === true) {
      ref.current.checked = false
    }
  })

  return (
    <>
    <Header pic={pic3} />
    <div className='foods-full-div'> 
        {/* <FoodFatherComponent title={'Beijing Duck'} img={foodImg[5]} text={foodText[0]} />
        <FoodFatherComponent title={'Instant-boiled Mutton'} img={foodImg[1]} text={foodText[1]} />
        <FoodFatherComponent title={'Sautéed Pork Shreds'} img={foodImg[2]} text={foodText[2]} />
        <FoodFatherComponent title={'Quick-fried Mutton'} img={foodImg[3]} text={foodText[3]} />
        <FoodFatherComponent title={'Soy Bean Noodles'} img={foodImg[4]} text={foodText[4]} />
        <FoodFatherComponent title={'Quick-fried Tripe'} img={foodImg[5]} text={foodText[5]} /> */}
        {foodText.map((m,i) => 
          <FoodFatherComponent  title={foodTitle[i]} text={foodText[i]} img={foodImg[i]} />
        )}
    </div>
    </>
  );
}) 