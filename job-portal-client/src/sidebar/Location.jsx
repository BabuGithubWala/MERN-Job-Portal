import React from 'react'
import InputField from '../components/InputField'

const Location = ({ handleChange }) => {
    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Location</h4>

            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name="test" id="test" value="" onChange={handleChange} />
                    <span className='checkmark'></span>All
                </label>

                <InputField handleChange={handleChange} value="kolkata" title="Kolkata" name="test" />
                <InputField handleChange={handleChange} value="noida" title="Noida" name="test" />
                <InputField handleChange={handleChange} value="mumbai" title="Mumbai" name="test" />
                <InputField handleChange={handleChange} value="bangalore" title="Bangalore" name="test" />
                <InputField handleChange={handleChange} value="ahmedabad" title="Ahmedabad" name="test" />
                <InputField handleChange={handleChange} value="hyderabad" title="Hyderabad" name="test" />

            </div>
        </div>
    )
}

export default Location