import React from 'react'
import { Divider } from 'antd'
import './Card.css'

const index = ({ children, title, borderColor, width, borderRadius, height, style, margin }) => {
    let boxStyle;
    boxStyle = {
        border: `1px solid ${borderColor}`,
        width: `${width}`,
        height: `${height}`,
        borderRadius: `${borderRadius}`,
        margin: `${margin}`
    };
    return (
        <div style={boxStyle}>
            <div className='ZCard_title'>{title}</div>
            <Divider />
            <div className='ZCard_content'>{children}</div>
        </div>
    )
}

index.defaultProps = {
    borderColor: "#f0f0f0",
    width: '23vw',
    height: '20vh',
    borderRadius: '15px'
}

export default index