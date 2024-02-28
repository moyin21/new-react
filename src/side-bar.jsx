import './Top-Header.css'
import home from "./React youtube icons/home.svg"
import ytshort from './React youtube icons/youtubeshorts.svg'
import ytsub from './React youtube icons/youtube-subscription (2).svg'
import ytyou from './React youtube icons/youtube (2).svg'
import history from './React youtube icons/history-outline (1).svg'

const SideBar = () => {
    return (
        <div className='bar'>
            <div className='home-div'><img src={home} className="home" /><br />
                Home</div>
            <div className='home-div'><img src={ytshort} className="home" /><br />
                Shorts</div>
            <div className='home-div'><img src={ytsub} className="home" /><br />
                Subscriptions</div>
            <div className='home-div'><img src={ytyou} className="home" /><br />
                You</div>
            <div className='home-div'><img src={history} className="home" /><br />
                History</div>
        </div>
    );
}

export default SideBar;