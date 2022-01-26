import { Fragment } from "react/cjs/react.production.min";
import Paystack from '../../../assets/png/PScolor.png'
import Location from "../../../assets/svg/Location";
import Google from '../../../assets/png/gColor.png'
import Flutter from '../../../assets/png/flutter.png'
import PrevArrow from "../../../assets/svg/LeftArrow";
import NextArrow from "../../../assets/svg/NextArrow";


export default function Row2(){
     const Openings=[{
         post:'QA Engineer',
         companyName:'Paystack',
         logo:Paystack,
         jobType:'Full Time',
         location:'Lagos,Nigeria',
         Link:''

     },{
        post:'product Analyst',
        companyName:'Google',
        logo:Google,
        jobType:'Part Time',
        location:'Lagos,Nigeria'

    },{
        post:'HR Manager',
        companyName:'Flutterwave',
        logo:Flutter,
        jobType:'Full Time',
        specification:'',
        location:'Abuja,Nigeria'

    },{
        post:'QA Engineer',
        companyName:'Paystack',
        logo:Paystack,
        jobType:'Full Time',
        location:'Lagos,Nigeria'

    },]

    return(
        
            <div class='recommendation'>
               <h1>
                   Recommended Jobs
                </h1>
                <div className="openings">
                    {Openings.map(opening=>(
                        <div className="opening">
                            <div class='up'>
                                <span class='type'><p>{opening.jobType}</p></span>
                                <div class='img'><img src={opening.logo} alt='' /></div>
                                <span class='post'><p>{opening.post}</p></span>

                            </div>
                            <div className="bottom">
                                <span class='name'>{opening.companyName}</span>
                                <div>
                                    <span><Location /> {opening.location}</span>
                                    <p class='apply'>Apply now</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="arrows">
                    {/* colors of arrow will  be changed with fill} */}
                    <span><PrevArrow /></span>
            
                    <span style={{marginRight:'101px',marginLeft:'10px'}}><NextArrow /></span>
                </div>
            </div>
        
    )
}