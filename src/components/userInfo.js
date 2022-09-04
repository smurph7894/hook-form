import React from 'react'

const UserInfo = (props) => {
    return (
        <div>
            <h1>Your Form Data</h1>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Email: {props.email}</p>
            <p>Password: {props.password}</p>
            <p>Confirm Password: {props.confirmPassword}</p>
        </div>
    )
}

export default UserInfo