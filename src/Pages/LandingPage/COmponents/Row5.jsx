import Frame from "./ImageFrame";
import Black from '../../../assets/png/black.png'
import PrevArrow from "../../../assets/svg/LeftArrow";
import NextArrow from "../../../assets/svg/NextArrow";

export default function Row5(){
    return(
        <div className="row5">
            <h3 className="head">
            What are our customers saying
            </h3>
            <div class='content'>
                <div className="image">
                   <Frame Img={Black} />
                </div>
                <div class='write_up'>
                     <div className="top">
                         <PrevArrow /><span style={{marginLeft:'10px'}}><NextArrow /></span>
                     </div>
                     <p>
                     The platform is really convenient to reach out to companies & I have managed to secure 2 interviews already! I can also track my application status instead of wondering whether the company has seen or shortlisted me
                     </p>
                     <p className="name">
                         Irma black
                     </p>
                     <p class='role'>
                         HR Manager at MasterCard
                     </p>
                </div>
            </div>
        </div>
    )
}