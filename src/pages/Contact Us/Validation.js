const validateEmail = ({email, setEmailError}) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email && !email.match(emailRegex)
    ? setEmailError('Email is not Valid') : setEmailError('')
}

const validateFUllName = ({fullName, setFullNameError}) => {
    return fullName && fullName.length < 5 ? setFullNameError("name is too short") : fullName && fullName.length > 20 ? setFullNameError('Try to make short ') : setFullNameError('')
}

const validateMessage = ({message, setMessageError}) =>{
    return message && message.length < 5
    ? setMessageError('Message is too short')
    : message && message.length > 200
    ? setMessageError('Try to make short and meanfull')
    : setMessageError('');
}