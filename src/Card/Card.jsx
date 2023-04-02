import React from 'react'
import { Divider } from 'antd'


const index = ({ extra, children, title, borderColor, width, borderRadius, height, margin }) => {
    let boxStyle;
    let titleStyle;
    let contentStyle;
    let titleText;
    let extraStyle;
    boxStyle = {
        border: `2px solid ${borderColor}`,
        width: `${width}`,
        height: `${height}`,
        borderRadius: `${borderRadius}`,
        margin: `${margin}`
    };
    titleStyle = {
        height: '3vh',
        lineHeight: '6vh',
        paddingLeft: '1vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '1vw'
    };
    contentStyle = {
        paddingLeft: '1vw'
    };
    titleText = {
        fontSize: 'larger',
    };
    extraStyle = {

    }
    return (
        <div style={boxStyle}>
            <div style={titleStyle}>
                <div style={titleText}>{title}</div>
                <div style={extraStyle}>{extra}</div>
            </div>
            <Divider />
            <div style={contentStyle}>{children}</div>
        </div>
    )
}

index.defaultProps = {
    borderColor: "#f0f0f0",
    width: '23vw',
    height: '26vh',
    borderRadius: '0px'
}

export default index