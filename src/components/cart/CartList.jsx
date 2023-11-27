import CartItem from "./CartItem";

const CartList = ({data, onDel, onDelAll, onEdit, total}) => {
    return (
        <div className="con2">
            <p>
                <button  className="btn" onClick={onDelAll} >전체삭제</button>
                <span className="total">
                    총금액 :  {total}
                </span>
            </p>        
            <ul className="list">
               {data.map(item =><CartItem key={item.id} onDel={onDel} onEdit={onEdit} item = {item} /> )}
            </ul>
        </div>
    );
};

export default CartList;