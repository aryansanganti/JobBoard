import React from 'react'
import InputField from '../component/InputField'

const Employement = ({ handleChange }) => {
    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Work Experience</h4>

            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' id='test' value={""} onChange={handleChange} />
                    <span className='checkmark'></span>Any Experience
                </label>


                <InputField handleChange={handleChange} value="full Time" title="Full Time" name="test" />
                <InputField handleChange={handleChange} value="temporary" title="Temporary" name="test" />
                <InputField handleChange={handleChange} value="part Time" title="Part Time" name="test" />

            </div>
        </div>
    )
}

export default Employement