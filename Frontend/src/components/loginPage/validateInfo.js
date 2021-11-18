export default function validate(values) {
    let errors = {}

    if(!values.username.trim()){
        errors.username = 'Username required';
    }
    if(!values.email){
        errors.email = 'Email required';
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = 'Email address is invalid';
    }
    if(!values.phone){
        errors.phone = 'Phone number is required';
    }
    else if(values.phone.length !== 10){
        errors.phone = 'Phone number should be of length 10';
    }
    if(!values.gender){
        errors.gender = 'Gender is required';
    }
    if(!values.password){
        errors.password = 'Password is required';
    }
    else if(values.password.length < 6){
        errors.password = 'Password should be atleast 6 characters';
    }
    if(!values.password2){
        errors.password2 = 'Password is required';
    }
    else if(values.password2 !== values.password){
        errors.password2 = 'Passwords do not match';
    }
    
    return errors;
}
