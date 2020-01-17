export const validateEmail = (email: string) => {
    const regexValidator = /.+[@].+\.com/;
    const valid = regexValidator.test(email);
    if (!valid){
        return ("Email inválido")
    }
    return ""
}

export const validatePassword = (password: string) => {
    const regexValidator = /(((.*[A-Z].*)|(.*[a-z].*))(.*[0-9].*)|(.*[0-9].*)((.*[A-Z].*)|(.*[a-z].*)))/;
    const valid = regexValidator.test(password);
    if (!valid){
        return ("Pelo menos 1 número e 1 caractere")
    }
    const minimumSize = (password.length >= 7);
    if (!minimumSize){
        return ("Senha muito curta (7 min.)")
    }
    return ""  
}

export const validateName = (name: string) => {
    if (name === "")
    {
        return "Nome vazio"
    }
    else{
        return ""
    }
}

export const validateCPF = (cpf: string) => {
    const regexValidator = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{11}$)/
    const valid = regexValidator.test(cpf);
    if (!valid){
        return ("CPF inválido")
    }
    return ""
}

export const validateBirthDate = (birth: string) => {
    const regexValidator = /(^\d{4}\/\d{2}\/\d{2}$)|(^\d{4}\-\d{2}\-\d{2}$)/
    const valid = regexValidator.test(birth)
    if (!valid){
        return ("Data em formato inválido")
    }
    
    const today = new Date();
    const birthDate = new Date(birth);
    const minDate = new Date("1900/01/01");
    const birthInFuture = (today < birthDate)
    const tooOld = (birthDate < minDate)

    if (birthInFuture){
        return ("Data de nascimento no futuro")
    }
    else if (tooOld){
        return ("Data de nascimento muito antiga")
    }
    else{
        return ""
    }
}

export const formatsBirthDate = (birth:string) => {
    const year = birth.slice(0,4)
    const month = birth.slice(5,7)
    const day = birth.slice(8, 10)

    const result = year + '-' + month + '-' + day
    
    return result
}