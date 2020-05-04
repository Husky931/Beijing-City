import React from 'react'


export default function MuseumFormsField({museumTotal, handleChange, sortedMuseum}) {

    const { district, price, maxPrice, minPrice, kids, free } = museumTotal

    return (
        <section className='form-section'>

            <form className='form-html'>

                {/* DISTRICT SELECTION */}
                <div className='district-group'>    
                <div className='position-center'>
                <label htmlFor='district' className='district-label'>Select district</label>
                    <select name='district' id='district' value={district} onChange={handleChange} className='district-select-html' >
                        <option value='all'>All</option>
                        <option value='Chaoyang'>Chaoyang</option>
                        <option value='Dongcheng'>Dongcheng</option>
                        <option value='Fengtai'>Fengtai</option>
                        <option value='Haidian'>Haidian</option>
                        <option value='Xicheng'>Xicheng</option> 
                        <option value='Changping'>Changping</option>                                  
                    </select>
                    </div>
                </div>
                {/* END OF DISTRICT SELECTION */}

                <div className='price-group'>   
                <div className='position-center'> 
                    <label htmlFor='price' className='price-label'>Price range: {price} ¥ </label>
                    <input type='range' name='price' id='price' className='input-price-range' 
                    min={minPrice} max={maxPrice} value={price} onChange={handleChange}/>
                    </div>
                </div>

                <div className='check-group'>    
                <div className='position-center'>
                        <div className='check-group-kids-div'>
                            <input type='checkbox' id='kids' name='kids' checked={kids} onChange={handleChange} />
                            <label htmlFor='kids' className='label-checkbox'>Kids</label>
                        </div>
                        <div className='check-group-free-div'>
                            <input type='checkbox' id='free' name='free' checked={free} onChange={handleChange}/>
                            <label htmlFor='free' className='label-checkbox-free'>Free</label>
                        </div>
                        </div>
                </div>

                <h3 className='results-group'>Results: {sortedMuseum.length}</h3>
                
            </form>

        </section>
    )
}