


import { Link } from 'react-router-dom';
import { ListGroup} from 'reactstrap';


function AdminMenus() {
    return (
       <>
        <ListGroup>

         <Link className='list-group-item list-group-item-action' to="/view-all">
         All
         </Link>
         <Link className='list-group-item list-group-item-action' to="/view-medicines">
         Medicine
         </Link>
         <Link className='list-group-item list-group-item-action' to="/add-medicine">
         Add Medicine
         </Link>
         <Link className='list-group-item list-group-item-action' to="/cosmetics">
         Cosmetics
         </Link>
         <Link className='list-group-item list-group-item-action' to="/food-item">
         Food Item
         </Link>
         <Link className='list-group-item list-group-item-action' to="/home">
         Home
         </Link>
            
        
        </ListGroup>



       </>



    );
}
export default AdminMenus;