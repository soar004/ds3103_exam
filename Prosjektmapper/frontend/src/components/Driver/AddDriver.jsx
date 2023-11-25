import {useEffect, useState} from 'react';
import FormulaService from '../../services/FormulaService';

//legger til en sjåfør
const AddDriver = () => {
    const [firstname, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [nationality, setNationality] = useState("");
    const [imgDriver, setImgDriver] = useState("");

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

    const saveDriver = () => {
        const newDriver = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            nationality: nationality,
            imgDriver: imgDriver.name
        };
        FormulaService.postDrivers(newDriver, imgDriver);
    }
    return(
        <section>
            <h3>Sign up as a new driver!</h3>
            <div>
                <label>Firstname</label>
                <input name='firstName' onChange={handleChange} type="text"/>
                
            </div>
            <div>
                <label>Lastname</label>
                <input name='lastName' onChange={handleChange} type="text"/>
            </div>
            <div>
                <label>Age</label>
                <input name='age' onChange={handleChange} type="text"/>
            </div>
            <div>
                <label>Nationality</label>
                <input name='nationality' onChange={handleChange} type="text"/>
            </div>
            <div>
                <label>Image of yourself</label>
                <input name='imgDriver' onChange={handleChange} type="file"/>
            </div>
            <input onClick={saveDriver} type="button" value="Add Driver"/>
        </section>
    )
}
export default AddDriver;