import { addToCart } from "../Functionalities/AddToCart";

// item card component. shows relevant details of the product
export default function ItemCard(props){
    let alter = "Photo of " + props.name;
    return (
        <div className="card">
            <div className="card-content">
                <img src={props.url} alt={alter}></img>
                <div>{props.name}</div>
                <div>${props.price}</div>
                {/* performs add to cart operation upon click */}
                <button onClick={() => addToCart(props)}> add to cart </button>
            </div>
        </div>
    )
}