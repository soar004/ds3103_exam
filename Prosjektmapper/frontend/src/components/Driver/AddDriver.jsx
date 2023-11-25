import {useEffect, useState} from 'react';
import FormulaService from '../../services/FormulaService';
import 'bootstrap/dist/css/bootstrap.min.css';


//legger til en sjåfør
const AddDriver = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [nationality, setNationality] = useState("");
    const [imgDriver, setImgDriver] = useState("");
    
    //ved å håndtere error til bruker
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        switch(e.currentTarget.name) {
            case "firstName":
                setFirstName(e.currentTarget.value);
            break;
            case "lastName":
                setLastName(e.currentTarget.value);
            break;
            case "age":
                setAge(e.currentTarget.value);
            break;
            case "nationality":
                setNationality(e.currentTarget.value);
            break;
            case "imgDriver":
                setImgDriver(e.currentTarget.files[0]);
            break;
        }
    }

    const saveDriver = async () => {
        try{
            setLoading(true);
            const newDriver = {
                firstName: firstName,
                lastName: lastName,
                age: age,
                nationality: nationality,
                imgDriver: imgDriver.name
            };
            await FormulaService.postDrivers(newDriver, imgDriver);
        }
        catch(error){
            console.error("Feil ved lagring av fører:", error);
            setError("Something went wrong by adding a driver. Please try again");
        } finally {
            setLoading(false);
        }
    }

    return(
        //inputfelt hvor bruker kan skrive inn sine verdier
        <section className="container mt-4 bg-dark p-4 rounded">
            {error && <p style={{color: "red"}}>{error}</p>}
            <div className="form-group">
                <label className="text-white">Firstname</label>
                <input name='firstName' onChange={handleChange} type="text" className="form-control"/>
                
            </div>
            <div className="form-group">
                <label className="text-white">Lastname</label>
                <input name='lastName' onChange={handleChange} type="text" className="form-control"/>
            </div>

            <div className="form-group">
                <label className="text-white">Age</label>
                <input name='age' onChange={handleChange} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-white">Nationality</label>
                <input name='nationality' onChange={handleChange} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-white">Image of yourself</label>
                <input name='imgDriver' onChange={handleChange} type="file" className="form-control-file text-white p-3"/>
            </div>
            <button onClick={saveDriver} disabled={loading} className="btn btn-danger">
                {loading ? "Adding Driver..." : "Add Driver"}
            </button>
        </section>
    )
}
export default AddDriver;