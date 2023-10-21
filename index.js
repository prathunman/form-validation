const form = document.getElementById('userform');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const address =document.getElementById('address');

form.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs();
});

function setError(id,message){
    if(id===email){
        const error = document.getElementById('error');
        error.innerText=message;
        id.classList.add('text-red-600');
    }
    else{
        id.placeholder = message;
        id.classList.add('placeholder-red-600');
    }
}
function setSuccess(){
    fname.classList.add('border-green-400')
    lname.classList.add('border-green-400')
    email.classList.add('border-green-400')
    address.classList.add('border-green-400')
}


const validateInputs = () =>{
    const validFname = fname.value.trim();
    const validLname = lname.value.trim();
    const validEmail = email.value.trim();
    const validAddress = address.value.trim();

    if(validFname === '')
    {
        setError(fname,"Require the first name.")
    }
    if(validLname === '')
    {
        setError(lname,"Require the last name.")
    }
    if(validEmail===''){
        setError(email,"Require the email address.")
    }
    else if(!validateEmail(validEmail))
    {
        setError(email,"Invaild email address")
    }
    if(validAddress===''){
        setError(address,"Require the address.")
    }
    else{
        setSuccess()
    }
    
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };