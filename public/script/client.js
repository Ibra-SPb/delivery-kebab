//registration
const regForm = document.querySelector('.regForm')
if (regForm) {
    regForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        console.log(e.target)
        const { name, email, phone, role, address, password, action, method } = e.target;
        const res = await fetch(action, {
            method,
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                phone: phone.value,
                role: role.value,
                address: address.value,
                password: password.value,
            }),
        })
        const data = await res.json();

        if(!data.status) {
            const errorBlock = document.querySelector('.errorBlock')
            errorBlock.innerHTML = data.message;
        //   errorBlock.style.visibility = 'visible';
        } else {
            window.location.assign('/');
          }
    })
}

//auth
const logForm = document.querySelector('.logForm')
if(logForm) {
logForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { email, password, action, method } = e.target;
  const res = await fetch(action, {
    method,
    headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
  })
  const data = await res.json();

  if (!data.status)  {
    const errorBlock = document.querySelector('.errorBlock')
    errorBlock.innerHTML = data.message;
  } else {
    window.location.assign('/')
  }
})
}