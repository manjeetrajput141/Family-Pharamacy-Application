


import { Link } from 'react-router-dom';
import { ListGroup} from 'reactstrap';


function NormalMenus() {
    return (
       <>
        <ListGroup>

         <Link className='list-group-item list-group-item-action' to="/all-product">
         All
         </Link>
         <Link className='list-group-item list-group-item-action' to="/view-medicines">
         Medicine
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
export default NormalMenus;