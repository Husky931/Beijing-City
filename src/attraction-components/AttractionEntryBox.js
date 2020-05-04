import React from 'react'
import AttractionBoxHeaderImage from '../attraction-components/AttractionBoxHeaderImage'
import AttractionBoxTitle from '../attraction-components/AttractionBoxTitle'
import AttractionBoxText from '../attraction-components/AttractionBoxText'
import AttractionIcons from '../attraction-components/AttractionIcons'


export default function AttractionEntryBox({img, title, introText}) {


    return (
        <div className='attraction-entry-box-complete'>
            <AttractionBoxHeaderImage img={img} />
            <AttractionIcons />
            <AttractionBoxTitle title={title} />
            <AttractionBoxText introText={introText} />
        </div>
    )
}