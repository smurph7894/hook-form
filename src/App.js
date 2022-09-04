import './App.css';
import FormInput from './components/formInput';
import UserInfo from './components/userInfo';
import React, {useState} from 'react'

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    return (
    <div>
        <FormInput 
        firstName={firstName} 
        lastName={lastName} 
        email={email} 
        password={password} 
        confirmPassword={confirmPassword} 
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
        />
        <UserInfo 
            firstName={firstName} 
            lastName={lastName} 
            email={email} 
            password={password} 
            confirmPassword={confirmPassword}
        />
    </div>
    );
}

export default App;
