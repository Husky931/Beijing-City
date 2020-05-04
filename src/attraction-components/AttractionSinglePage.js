import React from 'react'
import { useParams } from 'react-router-dom'

import AttractionTemplatePage from '../attraction-components/AttractionTemplatePage'


export default function AttractionSinglePage() {

    let { slug } = useParams()

    return (
        <>
        <AttractionTemplatePage />
        </>
    )
}

