import React from 'react';
import { Button } from 'jc-ui';

const Demo4 = () => {
    return (
        <>
            <div>
                <Button rowMargin>自带横向间隔</Button>
                <Button rowMargin>自带横向间隔</Button>
            </div>
            <div>
                <Button columnMargin rowMargin asyncButton>自带纵向间隔</Button>
                <Button columnMargin rowMargin>自带纵向间隔</Button>
            </div>
        </>
    );
}

export default Demo4;
