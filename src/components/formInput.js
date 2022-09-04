import React, {useState} from 'react'

const FormInput = (props) => {
    const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        setFirstName,
        setLastName,
        setEmail,
        setPassword,
        setConfirmPassword
    } = props
    return (
        <div>
            <div>
                <label> First Name: </label>
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label> Last Name: </label>
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label> Email: </label>
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label> Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label> Confirm Password: </label>
                <input type="text" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
        </div>
    );
};

export default FormInput