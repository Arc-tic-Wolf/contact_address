import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
 
const ProductList = () => {
    let [products, setProduct] = useState([]);
    let [search, setSearch]=useState([]);
    let [selected, setSelected]=useState(["city"]);
    products=products;
    
    useEffect(() => {
        getProducts();
    }, []);

    const handleSelect=(e)=>{
        setSelected(e.target.value);
    }
    

    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProduct(response.data);
    }
   
    
    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`);
        getProducts();
    }
    
    return (
        <div>
            <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <input type="text" placeholder='Search..' onChange={(event)=>setSearch(event.target.value)}/>
            
            <select  onChange={handleSelect}>
                <optgroup >
                <option value="city">City</option>
                <option value="country">Country</option>
                <option value="statename">State</option>
                </optgroup>
            </select>
            
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Company</th>
                        <th>Telephone</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Statename</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        products.filter((val)=>{
                            if (search==""){
                                return val;
                            }else{
                                
                                let v=selected=="city"?val.city:(selected=="country"?val.country:val.statename);
                                
                                if(v.toLowerCase().includes(search.toLowerCase())){
                                    return val;
                                }

                            }
                        }).
                        map((product, index) => (
                        <tr key={ product.id }>
                            <td>{ product.id }</td>
                            <td>{ product.firstname }</td>
                            <td>{ product.lastname }</td>
                            <td>{ product.company }</td>
                            <td>{ product.telephone }</td>
                            <td>{ product.email }</td>
                            <td>{ product.mobile }</td>
                            <td>{ product.city }</td>
                            <td>{ product.country }</td>
                            <td>{ product.statename }</td>
                            <td>
                                <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteProduct(product.id) } className="button is-small is-danger">DELETE</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default ProductList