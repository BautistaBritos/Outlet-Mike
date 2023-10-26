import carrito  from "../assets/carrito.png";

export const CartWidget = () => {
    return(<>
        <img src={carrito} alt="Carro" width={40}/>
        <span>0</span> 
    </>)
}