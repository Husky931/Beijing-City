import React from 'react'
import Hero from '../navigation-components/Hero'

export default function Error() {

    return (
        <>
            <Hero title={'404 ERROR'} subtitle={'This page does not exist'} buttonText={'Home'} pathTo={'/'} />
        </>
    )
}