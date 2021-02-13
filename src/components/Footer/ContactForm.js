import React, { useState } from "react"
import { navigate } from 'gatsby'
import NetlifyForm from 'react-ssg-netlify-forms'

const ContactForm = () => {

    // Post-Submit Navigate
    const postSubmit = () => {
        navigate('/hooray')
    }

    // Simple controlled form setup (Control your own state)
    const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })
    const [formValues, setFormValues] = useState({
        name: '',
        message: ''
    })

    return (
        <NetlifyForm formName="Very Simple Form" formValues={formValues} postSubmit={postSubmit} >
            <div>
                Your Name: <input type="text" name="name" value={formValues.name} onChange={handleChange} required />
            </div>
            <div>
                Message: <textarea name="message" value={formValues.message} onChange={handleChange} required />
            </div>
            <div>
                <button type="submit">Send</button>
            </div>
        </NetlifyForm>
    )
}

export default ContactForm;