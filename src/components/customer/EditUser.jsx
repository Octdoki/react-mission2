import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const EditUser = ({curr , onUpdate, setIsEdit}) => {
/*     const {user, setnmae} = useState({
        name: ''
    }) */
    const [user, setUser] = useState(curr)
    const { name, addr } = user
    useEffect(()=>{
        setUser(curr)
    },[curr] )

    const changeInput = e =>{
        const {name ,value} =e.target 
        setUser({
            ...user ,
            [name] : value
        })
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        //공백처리 
        // if(!name || addr ) return
        onUpdate(user)
        setUser({
            name : '' , addr : ''
        })

    }
    return (
        <form onSubmit={onSubmit}>
        <h2>고객 명단 수정</h2>
        <p>
            <label htmlFor="" >name</label>
            <input type="text" name='name' id='name' value={name} onChange={changeInput}/>
        </p>
        <p>
            <label htmlFor="">addr</label>
            <input type="text" name='addr' id='addr' value={addr} onChange={changeInput} />
        </p>
        <p>
          <button type='submit' onClick={onSubmit}>수정</button>
          <button onClick={()=>setIsEdit(false)}>취소</button>
        </p>
    </form>
    );
};

export default EditUser;