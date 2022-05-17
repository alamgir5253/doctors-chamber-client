import { useState } from "react"

const useToken = user =>{
  const [token, setToken] = useState('')
const email = user?.user?.email
const currentUser = {email:email}
if(email){
  fetch(`http://localhost:5000/user/${email}`,{
    method:'PUT',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(currentUser)
  })
  .then(res => res.json())
  .then(data =>{
    console.log('inside usetoken', data);
  })

}

  return [token]
}
export default useToken