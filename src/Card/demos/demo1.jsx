import React from 'react';
import { Card, Button } from 'jc-ui'

const Demo1 = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'rowType' }}>
            <Card title='标题' margin='1vw'>正文</Card>
            <Card title='标题' margin='1vw' extra={<Button type='primary'>Button</Button>} >正文</Card>
        </div>
    );
}

export default Demo1;
