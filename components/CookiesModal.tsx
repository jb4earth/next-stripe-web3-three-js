// @ts-nocheck
import React, {  } from 'react'
import { CWload } from '../components/CWload'
 
import CookieConsent, { Cookies } from 'react-cookie-consent';


        const CookiesModal = () => {
            
                    Cookies.set('Current_Address',CWload('CookiesModal.tsx'))
                    
                     if (true){  
            return (
            <CookieConsent
            location="bottom"
            buttonText="Sure man!!"
            cookieName="myAwesomeCookieName2"
            style={{background:'rgb(0 0 0)',color:'white',width:'auto',left:'auto',fontWeight:'600',alignItems:'flex-end'}}
                        buttonStyle={{background:'white',color:'black'}}
            expires={150}
            >
            <div className='cookies-img-holder'>
                        <img className='cookies-img' src='/Cookie2.png'/>
                        </div>
            This website uses cookies to enhance the user experience.{" "}
            <a href='#' style={{ fontSize: "13px", color:'blue' }}>Privacy Policy :O</a>
            </CookieConsent>
                    
           )}else{return(
            null
           )}
        }

export default CookiesModal        

