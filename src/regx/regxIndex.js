class Regx {
  numberRegex = /^\d+$/;
  emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
}

const RegValidation = new Regx();

export default RegValidation;
