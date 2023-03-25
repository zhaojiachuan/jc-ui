import React from 'react';
import { Button } from 'jc-ui'

const Demo2 = () => {

    const handleAdd = (e) => {
        alert('创建数据')
    }

    const handleEdit = (e) => {
        alert('编辑数据')
    }

    const handleDelete = (e) => {
        alert('删除数据')
    }

    return (
        <div>
            <Button editType='create' onClick={handleAdd} rowMargin >创建数据</Button>
            <Button editType='edit' onClick={handleEdit} rowMargin >编辑数据</Button>
            <Button editType='delete' onClick={handleDelete} rowMargin >删除数据</Button>
        </div>
    );
}

export default Demo2;
