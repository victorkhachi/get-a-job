import Logo from "../../../assets/png/Footer.png";
import FaceBook from "../../../assets/svg/FaceBook";
import Instagram from "../../../assets/svg/Instagram";
import LinkedIn from "../../../assets/svg/LinkedIn";
import Twitter from "../../../assets/svg/Twitter";

export default function Footer(){

    return(
       <div className="footer">
           <hr />
           <div class='footer_content'>
              <div className="left">
             <div class='img'>
                <img src={Logo} alt="" />
            </div>
            <p>Getajobng provides a full online service for anyone looking for a new job. We're not a recruitment agency, we're a job site.</p>

          </div>
          <div className="table">
                <table>
                       <thead>
                        <tr>
                            <th>Information</th>
                            <th>Job seekers</th>
                            <th>Employer</th>

                        </tr>
                        </thead>
                        <tr>
                            <td>About us</td>
                            <td>Create account</td>
                            <td>Create account</td>
                           
                        </tr>
                        <tr>
                            <td>contact us</td>
                            <td>Job List</td>
                            <td>Post a Job</td>

                        </tr>
                        <tr>
                            <td>Terms and Condition</td>
                            <td>FAQ</td>
                            <td>FAQ</td>

                        </tr>                    
                </table>
          </div>
          <div className="social">
                <p>Social Media:</p>
                <div>
                    <span><Instagram/></span>
                    <span><FaceBook /></span>
                    <span><Twitter /></span>
                    <span><LinkedIn /></span>

                </div>
          </div>
          </div>
 
       </div>
    )
    }