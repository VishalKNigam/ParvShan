import React from "react";
import { Card } from "react-bootstrap";
import "../bootstrap.min.css";
import Rating from "../Components/Rating";
const ProductScreen = (product) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </a>
        <Card.Body>
          <a href={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
          <Card.Text as="div">
            {/* <div className='my-3'>
        {product.rating} from {product.numReviews} reviews
      </div> */}
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as="div">{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductScreen;
