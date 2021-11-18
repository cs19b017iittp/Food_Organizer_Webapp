import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const useForm = (validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        phone: '',
        gender: '',
        password: '',
        password2:'',
    })

    var history = useHistory();
    const [errors,setErrors] = useState({})
    const [isSubmitting,setIsSubmitting] = useState(false)


    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values))
        setIsSubmitting(true)

    }


    useEffect(
        () => {
        if(Object.keys(errors).length === 0 && isSubmitting)
        {
            // callback()
            axios.post("http://localhost:3001/user/insert",{username:values.username,emailId:values.email,phone:values.phone,password:values.password});
            history.push("/main")
        }
    },[errors]
    );
    return {handleChange, values, handleSubmit, errors}
}
export default useForm