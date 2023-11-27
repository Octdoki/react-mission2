import { useRef } from "react";

const CartForm = ({changeInput, onSubmit, cart , textRef, isEdit}) => {
    //수
    const { text, price , amount} =cart
     Number(price)
    return (
        <div className="box con1">
            <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor="">품목</label>
                    <input type="text" name="text" ref={textRef} value={text || ''} onChange={changeInput} />
                </p>
                <p>
                    <label htmlFor="">가격</label>
                    <input type="text" name="price" value={price || ''} onChange={changeInput} />
                </p>
                <p>
                    <label htmlFor="">수량</label>
                    <input type="number" name="amount" value={amount || ''} onChange={changeInput} />
                </p>
                <p>
                    <button type="submit" onClick={onSubmit}>
                        {
                            isEdit? "수정" : "입력"
                        }
                   
                    </button>
                </p>
            </form>
        </div>
    );
};

export default CartForm;