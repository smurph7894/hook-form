import React, {useState} from 'react' 
import ValidatedInput from './ValidatedInput';

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
            <ValidatedInput 
                value={firstName}
                setValue={setFirstName}
                label={"First Name:"}
                errorMessage={"Your first name must have at least 2 characters."}
                hasError={(v) => v.length < 2 }
            />
            <ValidatedInput 
                value={lastName}
                setValue={setLastName}
                label={"Last Name:"}
                errorMessage={"Your last name must have at least 2 characters."}
                hasError={(v) => v.length < 2 }
            />
            <ValidatedInput 
                value={email}
                setValue={setEmail}
                label={"Email:"}
                errorMessage={"Your email must be valid and have at least 2 characters."}
                hasError={(v) => !v.includes("@") || !v.includes(".com") || v.length < 2}
            />
            <ValidatedInput 
                value={password}
                setValue={setPassword}
                label={"Password:"}
                errorMessage={"Your password must have at least 8 characters."}
                hasError={(v) => v.length < 8}
            />
            <ValidatedInput 
                value={confirmPassword}
                setValue={setConfirmPassword}
                label={"Confirm Password:"}
                errorMessage={"Your confirm password must match your password input."}
                hasError={(v) => password !== v }
            />
        </div>
    );
};

export default FormInput