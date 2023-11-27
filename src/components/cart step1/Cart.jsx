import { useRef } from 'react';
import { useState } from 'react';
import '../css/Cart.scss'
import CartForm from './CartForm';
import CartList from './CartList';

const Cart = () => {
    const [data, setData] =useState([])
    const [cart, setCart] = useState({
        text : '', price : '', amount : ''
    })
    const no = useRef(1)
    const textRef = useRef()
    const {text, amount, price} =cart

    const changeInput =e=>{
        const {name, value} = e.target 
        setCart({
            ...cart,
            [name] : value
        })
    }

    const onSubmit = e =>{
        e.preventDefault()
        // if(!data.text || data.amount< 1 ) return
        if(!text && amount< 1 ) return
        cart.id = no.current++
        setData([
            ...data,
            cart
        ])
        setCart({
            text : '', price : '', amount : ''
        })
        textRef.current.focus()
    }

    const onDel = (id)=>{
        setData(data.filter(item => item.id !== id ))
    }

    const onDelAll =()=>{
        setData([])
    }
    //{id : , text: '' , price : , amount : }
    return (
        <>
            <div className="con-box">
                <CartForm  textRef ={textRef} changeInput={changeInput} onSubmit={onSubmit} cart={cart} />
                <CartList data={data} onDel={onDel} onDelAll={onDelAll} />
            </div>
        </>
    );
};

export default Cart;