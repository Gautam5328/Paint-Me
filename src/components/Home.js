import React,{useState,useEffect} from 'react'
import axios from "axios";
import {Row,Col} from "react-bootstrap";
import Products from "../components/Products"

function Home() {
    const [productsData,setProductsData]=useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            console.log(res.data);
            setProductsData(res.data);
        })
    },[productsData])


    const renderData = productsData.map((data)=>{
            return(
                <Col  md={{span : 3}} xs={{ span: 6 }} sm={{ span: 4 }} xl={{ span: 4 }}>                
                    <Products data={data}/>
                </Col>
            )
        })

    

    return (
        <div>
            <Row gutter={40}>
                    {renderData}
             </Row>
        </div>
    )
}

export default Home
