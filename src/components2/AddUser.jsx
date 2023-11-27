import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const AddUser = ({onAdd}) => {
 
    return (
        <form >
            <h2>고객 명단 추가</h2>
            <p>
                <label htmlFor="name">name</label>
                <input type="text" name='name' id='name'  placeholder="이름을 입력하세요" />
            </p>
            <p>
                <label htmlFor="addr">addr</label>
                <input type="text" name='addr' id='addr' placeholder='지역을 입력하세요' />
            </p>
            <p>
              <button type='submit' >추가</button>
            </p>
        </form>
    );
};

export default AddUser;