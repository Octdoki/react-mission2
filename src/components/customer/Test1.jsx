import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import AddUser from './AddUser';
import'./css/Test1.scss'
import EditUser from './EditUser';
import Listuser from './Listuser';
const dataList =[
    {id : 1 , name  : '김철수', addr : '서울'},
    {id : 2 , name  : '김영희', addr : '부산'},
    {id : 3 , name  : '박지민', addr : '대구'},
    {id : 4 , name  : '최리희', addr : '인천'},
]
const Test1 = () => {
    const [data, setData] = useState(dataList)
    const [isEdit, setIsEdit] = useState( false)
    const [curr, setCurr] =useState({})
    const no = useRef(data.length +1)

    //추가
    const onAdd = (user)=>{
        user.id = no.current++
        setData([...data, user])

    }
    const onDel =(id)=>{

        setData(data.filter(item => item.id !== id ))
    }

    const onEdit =(user)=>{
        setIsEdit( true)
        setCurr(user)
        // setData(data.map(item => item.id === id ? {...item, } : item))
    }
    const onUpdate =(user)=>{
        setData(data.map(item => item.id  === user.id ? user : item))
        setIsEdit(false)

    }

    return (
        <div className='Customer'>
         
           {/* <EditUser/> */}
           {
               isEdit? <EditUser curr={curr} onUpdate={onUpdate} setIsEdit={setIsEdit}/> :   <AddUser onAdd={onAdd} />
           }
           <Listuser data={data} onDel={onDel} onEdit={onEdit }/>

        </div>
    );
};

export default Test1;

/* 
1.명단 추가 
    1-1. input onChange로 활성화
    1-2. 수정 
2.명단 삭제
*/