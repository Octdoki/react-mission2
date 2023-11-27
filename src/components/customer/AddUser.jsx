import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const AddUser = ({onAdd}) => {
    const [user, setUser] = useState({
        name: '' , addr : ''
    })
    const {name, addr} = user

 
    const nameRef= useRef()

    useEffect(()=>{
        nameRef.current.focus()
    },[])
    const changeInput  =(e)=>{
        const {name , value} =e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        //공백처리 
        if(!name || addr ) return
        onAdd(user)
        setUser({
            name: '' , addr :""
        })
        nameRef.current.focus()
    }
    return (
        <form onSubmit={onSubmit}>
            <h2>고객 명단 추가</h2>
            <p>
                <label htmlFor="name">name</label>
                <input type="text" name='name' id='name' value={name} onChange={changeInput} ref={nameRef} placeholder="이름을 입력하세요" />
            </p>
            <p>
                <label htmlFor="addr">addr</label>
                <input type="text" name='addr' id='addr' value={addr} placeholder='지역을 입력하세요' onChange={changeInput} />
            </p>
            <p>
              <button type='submit' onClick={onSubmit}>추가</button>
            </p>
        </form>
    );
};

export default AddUser;