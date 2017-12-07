const _signin = (email,password)=>(
  fetch('http://10.0.132.193:825/app/app/login.php',{
    method: 'POST',
    headers: {
      'Accept':'application/json',
      'Content-type':'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    })
  })
    .then(res => res.json())
);
module.exports = _signin;
//192.168.60.50
