import { isEmpty, isEmptyArray, isNullOrUndefined } from './helpers'

// 👉 Required Validator
export const requiredValidator = value => {
  if (isNullOrUndefined(value) || isEmptyArray(value) || value === false)
    return 'Ce champ est obligatoire'
  
  return !!String(value).trim().length || 'Ce champ est obligatoire'
}

// 👉 Email Validator
export const emailValidator = value => {
  if (isEmpty(value))
    return true
  const re = /^(?:[^<>()[\]\\.,;:\s@"]+(?:\.[^<>()[\]\\.,;:\s@"]+)*|".+")@(?:\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]|(?:[a-z\-\d]+\.)+[a-z]{2,})$/i
  if (Array.isArray(value))
    return value.every(val => re.test(String(val))) || 'Veuillez entrer une adresse e-mail valide'
  
  return re.test(String(value)) || 'Veuillez entrer une adresse e-mail valide'
}

// 👉 Password Validator
export const passwordValidator = password => {
  const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/
  const validPassword = regExp.test(password)
  
  return validPassword || 'Le champ doit contenir au moins une majuscule, une minuscule, un caractère spécial et un chiffre, avec un minimum de 8 caractères.'
}

// 👉 Confirm Password Validator
export const confirmedValidator = (value, target) => value === target || 'La confirmation du champ Mot de passe ne correspond pas.'

// 👉 Between Validator
export const betweenValidator = (value, min, max) => {
  const valueAsNumber = Number(value)
  
  return (Number(min) <= valueAsNumber && Number(max) >= valueAsNumber) || `Entrez un nombre entre ${min} et ${max}.`
}

// 👉 Integer Validator
export const integerValidator = value => {
  if (isEmpty(value))
    return true
  if (Array.isArray(value))
    return value.every(val => /^-?\d+$/.test(String(val))) || 'Ce champ doit être un entier.'
  
  return /^-?\d+$/.test(String(value)) || 'Ce champ doit être un entier.'
}


//phone number 
export const PhoneValidator = value => {
  if (isEmpty(value))
    return true
  let regeX = '^0\\d{9}$'
  regeX = new RegExp(regeX)
  
  return regeX.test(String(value)) || 'Le format du numéro de téléphone est invalide.'

}


// 👉 Regex Validator
export const regexValidator = (value, regex) => {
  if (isEmpty(value))
    return true
  let regeX = regex
  if (typeof regeX === 'string')
    regeX = new RegExp(regeX)
  if (Array.isArray(value))
    return value.every(val => regexValidator(val, regeX))
  
  return regeX.test(String(value)) || 'Le format du champ est invalide.'
}

// 👉 Alpha Validator
export const alphaValidator = value => {
  if (isEmpty(value))
    return true
  
  return /^[A-Z]*$/i.test(String(value)) || 'ce champ ne peut contenir que des caractères alphabétiques.'
}

// 👉 URL Validator
export const urlValidator = value => {
  if (isEmpty(value))
    return true
  const re = /^https?:\/\/[^\s$.?#].\S*$/
  
  return re.test(String(value)) || 'L\'URL est invalide.'
}

// 👉 Length Validator
export const lengthValidator = (value, length) => {
  if (isEmpty(value))
    return true
  
  return String(value).length === length || `"La longueur du champ Caractères doit être de ${length} caractères."`
}

// 👉 Alpha-dash Validator
export const alphaDashValidator = value => {
  if (isEmpty(value))
    return true
  const valueAsString = String(value)
  
  return /^[\w-]*$/.test(valueAsString) || 'Tous les caractères ne sont pas valides.'
}
