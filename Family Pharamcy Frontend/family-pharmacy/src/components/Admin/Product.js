
import { Button, Card, CardBody, CardFooter, CardSubtitle, CardText, Container } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import {  toast } from "react-toastify";
import { useNavigate} from "react-router-dom"

import base_url from "../../constants/constants";

const Product=({product,update})=>
{
    
    let navigate=useNavigate();
    const routeChange=()=>{
        let path=`/admin/products/update/${product.productId}`;
        
        navigate(path,{state:{id:product.productId,name:product.productName,
            batch:product.productBatch,desc:product.productDesc,
            category:product.category.categoryName,categoryId:product.category.categoryId}});
    
       }

 
    const deleteFunction=(id)=>{
      
    
        axios.delete(`${base_url}/family/products/delete/${id}`).then(
        (response)=>{
            toast.success("Deleted Successfully!!");
       update(id);

        }
        ,
        (error)=>{
            toast.error("Something went wrong!!\n");
            console.log("Not Deleted Something went wrong");
        }
   )
   
 }
    return(


    //Update another gap
    <Card className="text-center">
  <CardBody>
    <div className="row">
      {/* Left side: Image */
      
      }
      <div className="col-md-6 d-flex align-items-center justify-content-center">
       

          <img

  src={`${base_url}/family/products/images/${product.imageUrl}`}
  alt={product.productName}
  style={{
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px"
  }}
  onError={(e) => {
    e.target.src = "/images/default.jpeg"; // fallback image
  }}
/>


      </div>

      {/* Right side: Product details */}
      <div className="col-md-6 text-start">
        <CardFooter>Category: {product.category.categoryName}</CardFooter>
        <CardText>
          <h8>Batch No.</h8> {product.productBatch}
        </CardText>
        <CardSubtitle>
          <h5>{product.productName}</h5>
        </CardSubtitle>
        <CardText>{product.productDesc}</CardText>

        <Container className="text-center mt-3">
          <Button
            color="warning"
            onClick={() => {
              routeChange();
            }}
          >
             
            Update
          </Button>
          <Button
            color="danger ml-3"
            onClick={() => {
              deleteFunction(product.productId);
            }}
          >
            Delete
          </Button>
        </Container>
      </div>
    </div>
  </CardBody>
</Card>


    );
}
export default Product;



//         <Fragment>
        
//         <Card className="text-center" >
//             <CardBody style={{background:"#e2e2e2",padding:30}}>
//             <CardFooter>Category :{product.category.categoryName}</CardFooter>
//             <CardText><h6>Batch No. </h6>{product.productBatch}</CardText>
//                 <CardSubtitle><h3>{product.productName}</h3></CardSubtitle>
//                 <CardText>{product.productDesc}</CardText>
                
                
//                 <Container className="text-center">
//                     <Button color="warning " onClick={()=>{
//                         routeChange()} 
//                     }
// >Update</Button>
//                     <Button color="danger ml-3 " 
//                     onClick={()=>{
                        
//                         deleteFunction(product.productId);
//                     }}

//                     >Delete</Button>
//                 </Container>
//             </CardBody>
//         </Card>
//         </Fragment>


//             <Fragment>
//   <div
//     style={{
//       backgroundImage: "url('/images/product-bg.jpg')",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       minHeight: "100vh",
//       padding: "20px"
//     }}
//   >
//     <Card className="text-center"
//     style={{
//     backgroundImage: `url(/images/Dolo650.jpeg)`,//for dynamic path `url(${product.imageUrl})`
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     color: "white" // so text is visible
//   }}
    
//     >
//       <CardBody /** style={{ background: "#e2e2e2", padding: 30 }}   */>
//         <CardFooter>Category :{product.category.categoryName}</CardFooter>
//         <CardText>
//           <h6>Batch No. </h6>
//           {product.productBatch}
//         </CardText>
//         <CardSubtitle>
//           <h3>{product.productName}</h3>
//         </CardSubtitle>
//         <CardText>{product.productDesc}</CardText>

//         <Container className="text-center">
//           <Button
//             color="warning "
//             onClick={() => {
//               routeChange();
//             }}
//           >
//             Update
//           </Button>
//           <Button
//             color="danger ml-3 "
//             onClick={() => {
//               deleteFunction(product.productId);
//             }}
//           >
//             Delete
//           </Button>
//         </Container>
//       </CardBody>
//     </Card>
//   </div>
// </Fragment>

 {/* <img
           src={
           product.imageUrl
      ? `/images/${product.imageUrl}` 
      : "/images/default.jpeg"
  }
        // src="/images/Dolo650.jpeg"
          alt={product.productName}
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            borderRadius: "10px"
          }}
        /> */}

