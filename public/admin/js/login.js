const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  try{
    e.preventDefault();
    const data = {};
    data["username"] = e.target.elements.username.value;
    data["password"] = e.target.elements.password.value;
    const res = await login(data);
    if(res.status === "success") 
      window.location.href = "/admin/upload";
    else 
      console.log(res.message);
  }catch(err) {
    console.log(err)
  }
})

async function login(credentials) {
    const res = await fetch('/api/v1/auth/login', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(credentials)
    })
    return res.json();
}