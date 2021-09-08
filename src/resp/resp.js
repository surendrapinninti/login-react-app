// import'./Login.css'
import React from 'react';                
 const Prac = () => (
   <section style={{display:"flex",
    flexDirection: "column",
    height: "100%"}}>
     <header style={{flex:"0 0 auto"}}>header</header>
     <div style={{flex:"1 1 auto",overflow:"auto"}}>
       {[...Array(100).keys()].map((k) => (
         <p key = {k}>
           You can now view training in the browser.
         </p>
       ))}
     </div>
     <footer style={{flex:"0 0 auto"}}>footer content</footer>
   </section>
       )
 export default Prac;