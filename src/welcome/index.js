import React from 'react'

 function Welcome() {
     if (localStorage.getItem("authtoken")==="") {
        window.location.href="/" 
     }
    return (
        <div>
            <h1 >Welcome To EverestDx</h1>
            <button type="submit" onClick={()=>{localStorage.setItem("authtoken",""); window.location.href="/";  }}>logOut</button>
        </div>
    )
}
export default Welcome;