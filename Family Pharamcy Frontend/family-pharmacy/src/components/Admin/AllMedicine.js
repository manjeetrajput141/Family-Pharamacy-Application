import React, { useEffect, useState} from "react";

import { Button } from "reactstrap";
import {  ToastContainer,toast } from "react-toastify";
import axios from "axios";
import base_url from "../../constants/constants";
import Product from "./Product";





const AllMedicine = () => {
   
    
    
    const loadDataFromServer=()=>
    {
        axios.get(`${base_url}/family/products/all`).then
        ((response)=>
        {
            // console.log(response.data);
            
            setMedicine(response.data);
            toast.success("All Product Load successfully");
          
        }
        ,
        (error)=>
        {
            console.log("Something went wrong from server site");
        }
    )
    };

    useEffect(()=>
    {
        
        loadDataFromServer();
       
    },[]);
    
        

   
    const [medicine, setMedicine] = useState([]);

    const updateMedicine=(id)=>{
        setMedicine(medicine.filter((m)=>m.id !== id));
    }
    // const testing = () => {
    //     setMedicine([...medicine, { name: "test", desc: "testing descrpitin" },]);
    //     toast.success("Adding new medicine");
    // }
    return (
        <>
        <ToastContainer/>
            <h1>All Items are as follows</h1>
            {/* <Button  color="primary" >All  Products</Button> */}
            <div>

                {
                    medicine.length > 0 ? medicine.map((item) =>
                        <Product key={item.productId} product={item} update={updateMedicine}/>
                    ) : "No Products Available Please Add Some Products!!"
                }
            </div>
        </>
    )
}
export default AllMedicine;