import { Link } from "react-router-dom";
const Barlinks = () => {
    return ( 
        <div>
            <div className="bar">
            <div>
                <h1>Kats cafe|K.C</h1>
            </div>
            <div>
                <ul>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/menu'>MENU</Link></li>
                    <li><Link to='/features'>FEATURED PRODUCTS</Link></li>
                    <li><Link to='/deals'>DEALS</Link></li>
                    <li><Link to='/cart'><i className='bx bx-cart'></i></Link></li>
                    <li><i className='bx bxs-user-circle'></i></li>
                </ul>

            </div>
        </div>
        </div>
     );
}
 
export default Barlinks;