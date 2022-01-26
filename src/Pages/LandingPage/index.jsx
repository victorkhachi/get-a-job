import React from 'react'
import './index.scss'
import Logo from './COmponents/Logo'
import Paystack from '../../assets/png/paystack.png'
import Kpmg from '../../assets/png/kpmg.png'
import Google from '../../assets/png/google.png'
import Location from '../../assets/svg/Location'

export default function Landing(){


    return(
        <div class='body'>
            <div className="top">
                   <div className="background">
                         
                         </div>
                 <div className="heading">
                     <div><Logo /></div>
                     
                     <div class='links'>
                        <p>Companies</p>
                        <p>Candidates</p>
                        <p>Assessment</p>
                        <p>Post a Job</p>
                        <p>Career Advice</p>
                     </div>
                     <div class='auths'>
                       <p>Sign up</p>
                       <p class='login'>Log In</p>
                     </div>
                 </div>
                 <div className="content">
                     <div className="write-up">
                         <h1>Find a <span>job</span> easily</h1>
                         <p>With verified, up-to-date job listings directly from employer websites, we create a premium experience for job seekers, employers, and data seekers alike.</p>
                         <div className="inputs">
                             <input type="text" placeholder='Enter keywords, skill, interest' style={{width:'45%'}} />
                             <div class='location'><span><Location /></span><input type="text" placeholder='Location' /></div>
                             <div className="search_bar"></div>
                         </div>
                         <div className="trusted">
                             <p>Trusted by</p>
                             <div className="trusted_logos">
                                 <div><img src={Paystack} /></div>
                                 <div><img src={Google} /></div>
                                 <div><img src={Kpmg} /></div>

                             </div>
                         </div>
                     </div>
                     <div className="image"></div>
                 </div>
            </div>
 
        </div>
    )
}