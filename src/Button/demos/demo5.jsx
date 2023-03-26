import React from 'react';
import { Button } from 'jc-ui';

const Demo5 = () => {

    const testClick = () => {
        console.log(123)
    }

    return (
        <div>
            <Button
                debounce
                debounceTime={3000}
                onClick={testClick}
            >防抖按钮</Button>
        </div>
    );
}

export default Demo5;
