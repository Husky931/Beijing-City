import React from 'react';
import InformationCubesPlus from './InformationCubesPlus'
import InformationCubesText from './InformationCubesText'
import InformationCubesTitle from './InformationCubesTitle'

export default function InformationCubes({title, text, children}) {

    return (
        <div className='information-single-cube-over-div'>
        <div className='information-single-cube'>
            <InformationCubesTitle title={title}/>
            <InformationCubesText text={text}/>
            <InformationCubesPlus children={children} />
        </div>
        </div>
    )
}