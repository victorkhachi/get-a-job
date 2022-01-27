import Girl from '../../../assets/png/Girl.png'

export default function GetStarted(){
    return(
        <div class='get'>
               
               <div className="image">
               <div className="overlay">
                   <div style={{marginRight:'32px'}}>
                     <h1>
                       Get a Job you actually like
                     </h1>
                     <p>
                     Create an account and start applying
                     </p>
                     <div class='button'>
                     Get started
                     </div>
                     </div>
                   </div>
                   <img src={Girl} />
               </div>
        </div>
    )
}