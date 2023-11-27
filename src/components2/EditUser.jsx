import React from 'react';
import { useState } from 'react';

const EditUser = ({curr , onUpdate}) => {
/*     const {user, setnmae} = useState({
        name: ''
    }) */
    const [user, setUser] = useState(curr)
    const { name, addr } = user

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
        <form >
        <h2>고객 명단 수정</h2>
        <p>
            <label htmlFor="" >name</label>
            <input type="text" name='name' id='name' />
        </p>
        <p>
            <label htmlFor="">addr</label>
            <input type="text" name='addr' id='addr'  />
        </p>
        <p>
          <button type='submit' >수정</button>
          <button>취소</button>
        </p>
    </form>
    );
};

export default EditUser;