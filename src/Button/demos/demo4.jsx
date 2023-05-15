import React from 'react';
import { Button } from 'jc-ui';

const Demo4 = () => {
    return (
        <>
            <div>
                <Button rowType>自带横向间隔</Button>
                <Button rowType>自带横向间隔</Button>
            </div>
            <div>
                <Button columnType rowType >自带纵向间隔</Button>
                <Button columnType rowType>自带纵向间隔</Button>
            </div>
        </>
    );
}

export default Demo4;
