const register = (email,name,password)=>(
  fetch('http://10.0.132.193:825/app/app/register.php',{
    method: 'POST',
    headers: {
      'Accept':'application/json',
      'Content-type':'application/json',
    },
    body: JSON.stringify({
      email,
      name,
      password,
    })
  })
    .then(res=>res.text())
);
module.exports = register;
//192.168.60.50
