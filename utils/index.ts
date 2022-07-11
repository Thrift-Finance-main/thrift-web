import crypto from 'crypto'

export const capitalize = (s:string) => {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
export const validateEmail = (email:string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
// Rules: min 8 letter password, with at least a symbol, upper and lower case letters and a number

export const validatePassword = (password:string) => {
  return String(password)
    .match(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    );
};
// Rules: alphanumeric
export const validateUsername = (password:string) => {
  return String(password)
    .match(
      /^[a-zA-Z0-9]+$/
    );
};

export const isEmpty = (ob:any) => {
  for(let i in ob){ return false;}
  return true;
}

export function addressSlice(address:string, sliceLength = 10) {
  if (address) {
    return `${address.slice(0, sliceLength)}...${address.slice(-sliceLength)}`
  }
  return address
}

export const md5 = (contents: string) => crypto.createHash('md5').update(contents).digest("hex");
export const sha256 = (contents: string) => crypto.createHash('sha256').update(contents).digest("hex");

