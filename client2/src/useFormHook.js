import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {signUp, setEmailState, setUsernameState} from './actions/index';
import {useHistory} from 'react-router-dom'

const useFormHook = (callback,validate) =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const[values, setValues] = useState({
        username:'',
        email:'',
        password:'',
        password2:'',
    });


    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = e =>{
        const {name, value} = e.target;
        if (name === "username") {
            setUsername(value);
            dispatch(setUsernameState(value));
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "email") {
            setEmail(value);
            dispatch(setEmailState(value));
        }
        setValues({
            ...values,
            [name]:value 
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await dispatch(signUp({
            email: email,
            password: password,
            username: username,
        }, ()=>{
            console.log('pushing to another page');
            history.push('/account');
        }))
        setErrors(validate(values))
        setIsSubmitted(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitted){
            callback();
        }
    },[errors]
    )

    return {handleChange, values, handleSubmit, errors}
};
export default useFormHook;
