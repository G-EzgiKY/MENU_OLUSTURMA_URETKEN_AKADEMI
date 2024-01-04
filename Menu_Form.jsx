import React, { useState } from 'react'
import FoodList from './FoodList'
import { v4 as uuidv4 } from 'uuid';

function Menu_Form() {

    const emptyForm = { food: "", property: false,property2: false,property3: false,property4: false,property5: false,property6: false,property7: false,property8: false}
    const [formData, setFormData] = useState(emptyForm)
    const [foods, setFoods] = useState([])
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);

    function removeFoods(uuid){
        console.log(uuid);
        setFoods(prev=>prev.filter(item=>item.uuid!==uuid))
    }

    function editFoods(uuid){
        console.log(uuid);
        const food=foods.find(item=>item.uuid==uuid)
        console.log(food);
        setFormData(food);
        
    }
 
    function handleInputChange(event) {

       
        

        setFormData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.type == "checkbox" ?
                    event.target.checked : event.target.value
            }
        })

       

       
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        console.log(formData)
        if ((formData.food.length>0)  ){
            formData.uuid=uuidv4()
            setFoods(
                prev=>
                [formData,...prev]
            )
         
            setFormData(emptyForm)
            setShowSuccessNotification(true);
            
            
            console.log(foods)
            
            event.target.reset()

            setTimeout(() => {
                setShowSuccessNotification(false);
            }, 3000); // 3000 milisaniye = 3 saniye
            event.target.reset();
        }

        
    }







    return (
        
        <div className='container'>
            
            <h3 className='p-4 bg-dark mb-5 border rounded-lg' style={{color:"purple"}}>YEMEK EKLE</h3>
            <form onSubmit={handleFormSubmit}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">YEMEK İSMİ GİRİNİZ</label>
                    <div className="col-sm-10  ">
                        <input
                            onChange={handleInputChange}
                            type="text"
                            value={formData.food}
                            className="form-control "
                            id="food"
                            name="food"
                        />
                    </div>
                </div>
                

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input
                                onChange={handleInputChange}
                                className="form-check-input"
                                type="checkbox"
                                checked={formData.property}
                                id="property"
                            />
                            <label className="form-check-label" htmlFor="property" name="property">
                                SÜT & SÜT ÜRÜNLERİ
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input
                                onChange={handleInputChange}
                                className="form-check-input"
                                type="checkbox"
                                checked={formData.property2}
                                id="property2" />
                            <label className="form-check-label" htmlFor="property2" name="property2">
                                YUMURTA
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input
                                onChange={handleInputChange}
                                className="form-check-input"
                                type="checkbox"
                                checked={formData.property3}
                                id="property3" />
                            <label className="form-check-label" htmlFor="property3" name="property3">
                                FINDIK & FISTIK
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input
                                onChange={handleInputChange}
                                className="form-check-input"
                                type="checkbox"
                                checked={formData.property4}
                                id="property4" />
                            <label className="form-check-label" htmlFor="property4" name="property4">
                                DENİZ ÜRÜNLERİ
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input
                                onChange={handleInputChange}
                                className="form-check-input"
                                type="checkbox"
                                checked={formData.property5}
                                id="property5" />
                            <label className="form-check-label" htmlFor="property5" name="property5">
                                SOYA
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input
                                onChange={handleInputChange}
                                className="form-check-input"
                                type="checkbox"
                                checked={formData.property6}
                                id="property6" />
                            <label className="form-check-label" htmlFor="property6" name="property6">
                                BUĞDAY
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input
                                onChange={handleInputChange}
                                className="form-check-input"
                                type="checkbox"
                                checked={formData.property7}
                                id="property7" />
                            <label className="form-check-label" htmlFor="property7" name="property7">
                                GLUTEN
                            </label>
                        </div>
                    </div>

                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input
                                onChange={handleInputChange}
                                className="form-check-input"
                                type="checkbox"
                                checked={formData.property8}
                                id="property8" />
                            <label className="form-check-label" htmlFor="property8" name="property8">
                                VEGAN BESİNLER
                            </label>
                        </div>
                    </div>

                </div>






                <button type="submit" className="btn btn-primary">EKLE</button>

                {showSuccessNotification && (
                    <div className="alert alert-success mt-3" role="alert">
                        Başarıyla eklendi!
                    </div>
                )}

                
                
               
            </form>
            <br />
            <br />
            <br />

            <FoodList foods={foods} removeFoods={removeFoods} editFoods={editFoods}/>



        </div>
    )
}

export default Menu_Form