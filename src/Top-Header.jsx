import './Top-Header.css'
import ham from './React youtube icons/hamburger-md (1).svg'
import youtube from './React youtube icons/youtube.svg'
import search from './React youtube icons/search (1).svg'
import mic from './React youtube icons/microphone-fill (1).svg'
import options from './React youtube icons/options-vertical (1).svg'
import user from"./React youtube icons/user-circle-single (1).svg"

const TopHeader = () => {
    return (
        <div className='all'>
            <div className='overall-div'>
            <img src={ham} className="ham" />
            <img src={youtube} className="youtube" />
            <input type="search" name="" id="search" placeholder='Search' />
            <div className='ser'><img src={search} className="search" /></div>
            <div className='mic-div'><img src={mic} className="mic" /></div>
            <img src={options} className="options" />
            <button className="sign">
                <img src={user} className="user" />Sign in
            </button>
            </div>
        </div>
    );
}
 
export default TopHeader;