import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
 
const AddProduct = () => {
    
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [company, setCompany] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [statename, setStatename] = useState('');
    const history = useNavigate();
 
    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/products',{
            firstname:firstname,
            lastname:lastname,
            company:company,
            telephone:telephone,
            email:email,
            mobile:mobile,
            city:city,
            country:country,
            statename:statename
        });
        history.push("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveProduct }>
                <div className="field">
                    <label className="label">Firstname</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Firstname"
                        value={ firstname }
                        onChange={ (e) => setFirstname(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Lastname</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Lastname"
                        value={ lastname }
                        onChange={ (e) => setLastname(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Company</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Company"
                        value={ company }
                        onChange={ (e) => setCompany(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Telephone</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Telephone"
                        value={ telephone }
                        onChange={ (e) => setTelephone(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Email"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Mobile</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Mobile"
                        value={ mobile }
                        onChange={ (e) => setMobile(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">City</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="City"
                        value={ city }
                        onChange={ (e) => setCity(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Country</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Country"
                        value={ country }
                        onChange={ (e) => setCountry(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Statename</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Statename"
                        value={ statename }
                        onChange={ (e) => setStatename(e.target.value) }
                    />
                </div>
 
                
 
                <div className="field">
                    <button className="button is-primary">SAVE</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddProduct;