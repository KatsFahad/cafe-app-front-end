import { Link } from 'react-router-dom';
import img1 from '../../images/home-imgs/menu-imgs/img-1.jpg';
import img2 from '../../images/home-imgs/menu-imgs/img-2.jpg';
import img3 from '../../images/home-imgs/menu-imgs/img-3.jpg';
import img4 from '../../images/home-imgs/menu-imgs/img-4.jpg';
const Menubody = () => {
    return ( 
        <div>
            <h1>Welcome To K.C!!</h1>
            <p>Welcome to Kats Cafe with delicious universe. Everything from our Breakfast, Perfected Drinks, to your Generous Big Meals Right here at your fingertips. ORDER NOW.</p>

            <div className='menu-body'>
                <div>
                    <img src={img1} alt="" />
                    <Link to=''><h2>BREAKFAST</h2></Link>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <Link to=''><h2>BIG MEALS</h2></Link>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <Link to=''><h2>DRINKS</h2></Link>
                </div>
                <div>
                    <img src={img4} alt="" />
                    <Link to=''><h2>DESERT</h2></Link>
                </div>
            </div>
        </div>
     );
}
 
export default Menubody;