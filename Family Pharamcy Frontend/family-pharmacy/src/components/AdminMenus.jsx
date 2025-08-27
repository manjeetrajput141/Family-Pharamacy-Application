import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup} from 'reactstrap';

const  AdminMenus=()=> {
    return (
       <>
        <ListGroup>

<Link className='list-group-item list-group-item-action' to="/admin/view-all">
All Products
</Link>
<Link className='list-group-item list-group-item-action' to="/admin/add-medicine">
Add Medicine
</Link>
<Link className='list-group-item list-group-item-action' to="/admin/view-medicine">
Medicine
</Link>

<Link className='list-group-item list-group-item-action' to="/admin/cosmetics">
Cosmetics
</Link>
<Link className='list-group-item list-group-item-action' to="/admin/food-item">
Food Item
</Link>
<Link className='list-group-item list-group-item-action' to="/admin/suppliments">
Suppliments
</Link>
<Link className='list-group-item list-group-item-action' to="/admin/home">
Home
</Link>
   

</ListGroup>
       </>
    );
}
export default AdminMenus;