import React from "react";

const Products = [
  {
    id: 1,
    title: "product1",
    image: "https://cdn.create.vista.com/downloads/37096404-79fd-4c88-ac72-d70762d9d327_1024.jpeg",
    description: ""
  },
  {
    id: 2,
    title: "product2",
    image: "https://arborescence.ma/storage/products/plantes/1162_1.jpg",
    description: ""
  },
  {
    id: 3,
    title: "product3",
    image: "",
    description: ""
  },
  {
    id: 4,
    title: "product4",
    image: "",
    description: ""
  }
];

function Product() {
  return (
    <div className="row">
      {Products.map((product) => (
        <div className="col-md-3 mb-4" key={product.id}>
          <div className="card h-100">
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">The new product</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
