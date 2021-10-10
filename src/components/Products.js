import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn ,MDBCardHeader,
    MDBListGroup ,MDBListGroupItem
 } from 'mdb-react-ui-kit';

function Products(props) {
    const {title,category,description,image,price,rating}=props.data
    return (
      <div>
        <MDBCard style={{ maxWidth: "22rem" }}>
          <MDBCardHeader>{category}</MDBCardHeader>
          <MDBCardImage src={image} position="top" alt="..." />
          <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText>{description}</MDBCardText>
            <MDBBtn href="#">Add to Cart</MDBBtn>
          </MDBCardBody>

          <MDBListGroup flush>
            <MDBListGroupItem>{price} $</MDBListGroupItem>
          </MDBListGroup>

        </MDBCard>
        
      </div>
    );
}

export default Products