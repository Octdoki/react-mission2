import React from 'react';

const ItemUser = ({item, onDel, onEdit }) => {
    const {id, name, addr} = item
    return (
        <tr>
            <td>{name}</td>
            <td>{addr}</td>
            <td>
                {/* 자식 컴포넌트는 다이렛트로 값을 전ㄷ라 할 수 없다 */}
                <button onClick={()=> onEdit(item) } >수정</button>
                <button onClick={()=>onDel(id)}>삭제</button>
            </td>
        </tr>
    );
};

export default ItemUser;