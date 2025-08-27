import React, { useEffect, useState} from "react";

import { Button } from "reactstrap";
import {  ToastContainer,toast } from "react-toastify";
import axios from "axios";
import base_url from "../../constants/constants";
import Product from "./Product";



const Medicines=()=>{
    var counter=1;

    const loadDataFromServer=()=>
        {
            axios.get(`${base_url}/family/products/medicines`).then
            ((response)=>
            {
                // console.log(response.data);
                
                setMedicine(response.data);
                toast.success("Medicine Load successfully");
              
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
        },[])
        
            
    
       
        const [medicine, setMedicine] = useState([]);
    
        // const testing = () => {
        //     setMedicine([...medicine, { name: "test", desc: "testing descrpitin" },]);
        //     toast.success("Adding new medicine");
        // }
        return (
            <>
            <ToastContainer/>
                <h1>All Medicines are as follows</h1>
                {/* <Button  color="primary" >All  Medicine</Button> */}
                <div>
    
                    {
                        medicine.length > 0 ? medicine.map((item) =>
                            <Product key={counter++} product={item} />
                        ) : "No Medicine Available"
                    }
                </div>
            </>
        )
 }
export default Medicines;