import { Link } from "react-router-dom";
const UpperHome = () => {
    return ( 
        <div className="h-1">
            <div className="main-l">
                <h1 className="bol">K.C</h1>
                <h3 className="bol">Kats Cafe</h3>
                <div>
                    <hr />
                    <Link to='/menu'><h2><span><i className='bx bxs-food-menu'></i></span>MENU</h2></Link>
                </div>
                <div>
                    <hr />
                    <Link to=''><h2><span><i className='bx bx-current-location'></i></span>LOCATIONS</h2></Link>
                </div>
                <div>
                    <hr />
                    <Link to=''><h2><span><i className='bx bxs-group'></i></span>CAREERS</h2></Link>
                </div>
                <div>
                    <hr />
                    <Link to=''><h2><span><i className='bx bxs-message-rounded-dots'></i></span>FEEDBACK</h2></Link>
                </div>
                <div>
                    <hr />
                    <Link to=''><h2><span><i className='bx bxs-home-alt-2'></i></span>ABOUT US</h2></Link>
                </div>

            </div>
            <div className="order-btn">
                <button>START ORDER</button>
            </div>
        </div>
     );
}
 
export default UpperHome;