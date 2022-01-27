import Logos from '../../../assets/png/Logos.png'
import Learn from '../../../assets/png/Learn.png'

export default function Row4(){
    return(
        <div class='row4'>
             <div className="background">
                 <div>
                     <h3>
                     Over  1000+  jobs from top companies in our network
                     </h3>
                     <p>
                     Every day we index millions of jobs directly from employer websites. We’re committed to accurate, high-quality jobs so you won’t find old, duplicated, or spammy listings here.
                     </p>
                     <p>
                     Organize and automate your job search while at home or on the go. We’ll deliver new, relevant jobs of interest straight to your inbox.
                     </p>
                     <div className="learn_more">
                        <img src={Learn} />
                     </div>
                 </div>
                 <div class='img'>
                     <img src={Logos} />
                 </div>
             </div>
        </div>
    )
}