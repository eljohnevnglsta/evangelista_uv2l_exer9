export default function Cart(props) {
    let itemArray = props.data; 
    return (
        <div className="cartHolder">
            <div className="totalItems">Shopping Cart (Total: {props.data.length})</div>
            <div className="itemList">
                {itemArray.map(item => (
                    <div key={item.id} className="cartItem">
                        <img src={item.url} alt={item.name} />                   
                        <div className="details">
                            <div>{item.name}</div>
                            <div className="subtotal">${item.price}</div>
                        </div>    
                        <div className="quantity"> QTY: {item.quantity}</div>
                        <div className="price">${item.price * item.quantity}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
