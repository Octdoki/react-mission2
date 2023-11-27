import { useEffect } from 'react';
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
    const [isEdit, setIsEdit] =useState(false)
    const [curr, setCurr] =useState({})
    const no = useRef(1)
    const textRef = useRef()
    const {text, amount, price} =cart
    const [total, setTotal] =useState(0)
    Number(price)

    useEffect(()=>{
        setTotal(data.reduce((acc, cur) => acc + cur.price * cur.amount,0))
    },[data])
    const changeInput =e=>{
        const {name, value} = e.target 
        setCart({
            ...cart,
            [name] : value
        })
    }
    const onUpdate =(cart)=>{
        setData(data.map(item => item.id ===cart.id ? cart : item ))
    }
    const onSubmit = e =>{
        e.preventDefault()
        // if(!data.text || data.amount< 1 ) return
        // Number(price)
        if(!text && amount< 1 ) return
        if(isEdit){
            //수정 
            onUpdate(cart)
            setCart({
                text : '', price : '', amount : ''
            })
            setIsEdit(false)
            textRef.current.focus()
            onTotal()
        }else{
            cart.id = no.current++
            setData([
                ...data,
                cart
            ])
            setCart({
                text : '', price : '', amount : ''
            })
            textRef.current.focus()
            onTotal()
        }
 
    }

    const onDel = (id)=>{
        setData(data.filter(item => item.id !== id ))
    }

    const onDelAll =()=>{
        setData([])
    }

    const onEdit =(id)=>{
        setIsEdit(true)
        setCart(data.find(item => item.id === id ))
        setCurr(cart)
    }

    const onTotal = ()=>{
        setTotal(total + cart.price * cart.amount)
    }
    //{id : , text: '' , price : , amount : }
    return (
        <>
            <div className="con-box">
                <CartForm  textRef ={textRef} changeInput={changeInput} onSubmit={onSubmit} cart={cart} isEdit={isEdit}  />
                <CartList data={data} onDel={onDel} onDelAll={onDelAll} onEdit={onEdit} total={total}  />
            </div>
        </>
    );
};

export default Cart;