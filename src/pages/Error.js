import React from 'react'
import Hero from '../navigation-components/Hero'

export default function Error() {

    return (
        <>
            <Hero title={'Page not found'} subtitle={'Go back'} buttonText={'Home'} pathTo={'/'} />
        </>
    )
}