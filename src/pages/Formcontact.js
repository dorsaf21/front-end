import React from 'react'

const Formcontact = () => {



    return (
        <form >
            <div className='form-control'>
                <input type='text' placeholder='Name' required />

            </div>
            <div className='form-control'>
                <input type='email' placeholder='Email' required />
            </div>
            <div className='form-control'>
                <input placeholder='Phone Number' required />
            </div>
            <div className='form-control'>
                <textarea placeholder='Messages' required></textarea>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default Formcontact