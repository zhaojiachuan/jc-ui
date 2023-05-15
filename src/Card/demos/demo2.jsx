import React from 'react';
import { Card } from 'jc-ui'
const Demo2 = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Card title='自定义卡片' style={{ backgroundColor: 'pink' }} margin='1vw'>正文</Card>
            <Card title='小卡片' borderColor='blue' margin='1vw' height='20vh' width='20vw'>正文</Card>
            <Card title='圆角卡片' backgroundColor='blue' margin='1vw' height='30vh' width='20vw' borderRadius='20px'>正文</Card>
        </div>
    );
}

export default Demo2;
