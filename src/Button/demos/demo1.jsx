import React from 'react';
import { Button } from 'jc-ui'

const Demo1 = () => {

    const handleClick = (e) => {
        alert('按钮已被点击')
    }

    return (
        <div>
            <Button onClick={handleClick}>普通按钮</Button>
        </div>
    );
}

export default Demo1;
