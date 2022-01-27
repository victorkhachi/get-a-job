import OAG from '../../../assets/png/Oag.png'
import Health from '../../../assets/png/Health.png'
import Account from '../../../assets/png/Account.png'
import Education from '../../../assets/png/Educution.png'
import Design from '../../../assets/png/Design.png'
import Technology from '../../../assets/png/Technology.png'
import Security from '../../../assets/png/Security.png'
import Da from '../../../assets/png/Data.png'


export default function Categories(){
    
    const categories=[{
        icon:OAG ,
        job:'Oil and Gas',
        no:'10'

    },
    {
        icon:Health ,
        job:'Health Care',
        no:'20'

    },
    {
        icon:Account,
        job:'Accounting',
        no:'10'

    },
    {
        icon:Education,
        job:'Education',
        no:'10'

    },
    {
        icon:Design,
        job:'Design,Art and Multimedia',
        no:'15'

    },
    {
        icon:Technology,
        job:'Technology',
        no:'10'

    },
    {
        icon:Security,
        job:'Security',
        no:'10'

    },
    {
        icon:Da,
        job:'Data Analyst',
        no:'10'

    },]
   return(
       <div class='categories'>
           <h2>Popular Categories</h2>
           <div class='cat_list'>
                  {
                      categories.map(category=>(
                          <div className="category">
                              <img src={category.icon} />
                              <p>{category.job}</p>
                              <span>({category.no} new Jobs)</span>
                          </div>
                      ))
                  }
           </div>
       </div>
   )



}