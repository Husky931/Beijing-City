import React from 'react'
import MuseumThumbnails from '../museum-components/MuseumThumbnails'
import { Link, useRouteMatch } from 'react-router-dom' 

export default function MuseumBody({sortedMuseum, allTheData}) {

    let { url } = useRouteMatch()

    return (
        <div className='museum-body'>
            {sortedMuseum.map((m,i) => 
                <Link to={`${url}/${m.id}`} key={m.id}  >
                <MuseumThumbnails title={m.title} introText={m.introText} img={m.images[0]} key={m.id}  />
                </Link>
            )}
        </div>
    )
}
