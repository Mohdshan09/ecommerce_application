import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/products").then(res => setProducts(res.data));
    }, []);

    return (
        <div>
            <h1>Superhero T-Shirts</h1>
            <div className="product-list">
                {products.map(product => (
                    <div key={product._id} className="product-card">
                        <img src={product.image} alt={product.name} width="200" />
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>
                        <Link to={`/product/${product._id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
