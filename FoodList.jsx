import React from 'react'

function FoodList({ foods, removeFoods, editFoods }) {
    return (
        <>
            <div className='p-4 bg-dark mb-5 border rounded-lg'>

                <h3 className='p-4 bg-dark mb-5 border rounded-lg' style={{color:"purple"}}>YEMEKLER</h3>
                <ul className='list-group my-3'>
                    {foods.map(
                        (item) => <li
                            className='list-group-item'
                            key={item.uuid}>
                            {item.food}

                            <div className='btn-group float-end' role="group">
                            
                            <button onClick={() => editFoods(item.uuid)}
                                className='btn btn-sm btn-info float-end'>GÜNCELLE </button>
                            <button onClick={() => removeFoods(item.uuid)}
                                className='btn btn-sm btn-danger float-end'>SİL </button>
                            </div>
                        </li>)}

                </ul>




            </div>




        </>
    )
}

export default FoodList