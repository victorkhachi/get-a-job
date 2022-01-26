import Paystack from '../../../assets/png/PApaystack.png'
import Security from '../../../assets/png/securities.png'
import Manager from '../../../assets/png/Manage.png'
import Tick from '../../../assets/svg/GreenTick'
export default function Hiw(){

   return(
       <div class='hiw'>
           <div className="pictures">
               <div className="left_pic">
                   <div className="img">
                        <img src={Paystack}  />
                        <div className="details">
                        Product Analyst <span>@ Paystack</span>
                        </div>
                   </div>
                   <div style={{marginLeft:'32px'}} className="img">
                         <img src={Security}  />
                         <div className="details">
                         Securities Trader <span>@ Mckinnesy</span>
                         </div>
                   </div>
               </div>
               <div className="right_pic">
                    <div className="img">
                        <img src={Manager}  />
                        <div className="details">
                        HR Manager <span>@ Paystack</span>
                        </div>
                    </div>
               </div>
           </div>
           <div className="write_ups">
                 <h2>
                     How it works
                 </h2>
                 <p>
                 Geta job helps you find the right job easily. Getajob helps you find the right job easily. Getajob helps you find the right job easily.
                 </p>
                 <div className="topics">
                     <h4> <Tick /> Search Jobs</h4>
                     <p>
                           We have jobs in the most popular industries and with top companies. Plus, you can create alerts so you never miss a job opportunity.
                     </p>
                 </div>
                 <div className="topics">
                     <h4> <Tick /> Create a Profile and Get Noticed</h4>
                     <p>
                           Create a profile to showcase your skills and experience so recruiters can find you. Upload your CV so you can apply for jobs quickly and easily.
                     </p>
                 </div>
                 <div className="topics">
                     <h4> <Tick /> Apply for jobs</h4>
                     <p>
                     Find the training you need to improve your skills, or visit our Career Center for tips and advice to build your career.
                     </p>
                 </div>
           </div>
       </div>
   )



}