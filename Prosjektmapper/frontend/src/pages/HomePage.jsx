import carPicture from '../assets/images/car.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    return(
        <>
            <section className="d-flex flex-column align-items-center justify-content-center vh-100">
                <h1 className="text-center">FORMULA 1</h1>
                <img src={carPicture} alt="Bilde av formula1-bil. Foto" className="img-fluid"/>
            </section>
        </>
    )
}
export default HomePage;