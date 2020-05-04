import React from 'react';
import FoodFatherComponent from '../foods-components/FoodFatherComponent'

import {textBeijingDuck} from '../foods-components/FoodData'
import {textInstantBoiledMutton} from '../foods-components/FoodData'
import {textPortShreds} from '../foods-components/FoodData'
import {textQuickFriedMutton} from '../foods-components/FoodData'
import {textNoodlesSoyBean} from '../foods-components/FoodData'
import {textQuickFriedTripe} from '../foods-components/FoodData'

import foodDuckImage from '../images/food-beijing-duck.jpg'
import foodBoiledMutton from '../images/food-instant-boiled-mutton.jpg'
import foodNoodlesSoyBean from '../images/food-noodles-soy-bean-sauce.jpg'
import foodPorkShreds from '../images/food-pork-shreds.jpg'
import foodFriedMutton from '../images/food-quick-fried-mutton.jpg'
import foodFriedTripe from '../images/food-quick-fried-tripe.jpg'



export default function Foods() {
  return (
    <div className='foods-full-div'> 
        <FoodFatherComponent title={'Beijing Duck'} img={foodDuckImage} text={textBeijingDuck} />
        <FoodFatherComponent title={'Instant-boiled Mutton'} img={foodBoiledMutton} text={textInstantBoiledMutton} />
        <FoodFatherComponent title={'Sautéed Pork Shreds'} img={foodPorkShreds} text={textPortShreds} />
        <FoodFatherComponent title={'Quick-fried Mutton'} img={foodFriedMutton} text={textQuickFriedMutton} />
        <FoodFatherComponent title={'Soy Bean Noodles'} img={foodNoodlesSoyBean} text={textNoodlesSoyBean} />
        <FoodFatherComponent title={'Quick-fried Tripe'} img={foodFriedTripe} text={textQuickFriedTripe} />
    </div>
  );
}