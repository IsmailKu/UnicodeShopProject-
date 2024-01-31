import './Home.css';
import { Link } from 'react-router-dom';
import cartm from './cartm.png';


function Home() {
    return (
        <>
        <div className="header">
            <Link to='/'>
                <div className='header-1'>
                    Unicode Shop
                </div>
            </Link>
            <div className='basket-image'>
                <Link to='basket'>
                <img src={cartm}/>
                </Link>
            </div>
        </div>
        </>
    )
}
export default Home;