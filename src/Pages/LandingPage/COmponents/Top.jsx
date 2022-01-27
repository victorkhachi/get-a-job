import { Fragment } from "react/cjs/react.production.min";
import Logo from './Logo'
import Paystack from '../../../assets/png/paystack.png'
import Kpmg from '../../../assets/png/kpmg.png'
import Google from '../../../assets/png/google.png'
import Location from '../../../assets/svg/Location'
import Search from '../../../assets/svg/Search'
import Man from '../../../assets/png/image.png'
import Frame from './ImageFrame'
import { useState } from "react";
export default function Top(){
   const [display,setDisplay]=useState('')
       const [left,setLeft]=useState(-100)
     return(
         <Fragment>
                        <div className="top" onClick={()=>setDisplay('')}>
                   <div className="background">
                         
                         </div>
                 <div onClick={()=>setLeft(0)} className="floating_logo">
                     <Logo/>
                 </div>
                 <div style={{left:`${left}%`}} onClick={()=>setLeft(-100)} className="heading">
                     <div class='logo'><Logo /> </div>
                     
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
                             <div class='location' onClick={(e)=>e.stopPropagation()}>
                                 <span style={{display:`${display}`}}><Location /></span>
                                 <input onFocus={(e)=>{
                                 setDisplay('none')}} type="text" placeholder='Location' /></div>
                             <div className="search_bar"><Search /></div>
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
                     <div className="image">
                        <Frame Img={Man} />
                     </div>
                 </div>
            </div>
 
         </Fragment>
     )
}