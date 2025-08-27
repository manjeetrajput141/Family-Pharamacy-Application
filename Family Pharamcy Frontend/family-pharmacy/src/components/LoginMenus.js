


import { Link } from 'react-router-dom';
import { ListGroup} from 'reactstrap';


function LoginMenus() {
    return (
       <>
        <ListGroup>

         <Link className='list-group-item list-group-item-action' to="/view-all">
            All Products    
         </Link>
         <Link className='list-group-item list-group-item-action' to="/view-medicines">
         Medicines
         </Link>
        
         <Link className='list-group-item list-group-item-action' to="/cosmetics">
         Cosmetics
         </Link>
         <Link className='list-group-item list-group-item-action' to="/food-item">
         Food Item
         </Link>
         <Link className='list-group-item list-group-item-action' to="/suppliments">
Suppliments
</Link>
         <Link className='list-group-item list-group-item-action' to="/home">
         Home
         </Link>
            
        
        </ListGroup>



       </>



    );
}
export default LoginMenus;