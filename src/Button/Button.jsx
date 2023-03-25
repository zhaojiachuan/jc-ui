import React from "react";
import { Button } from "antd";
const index = ({ children, onClick, bcolor, color, bgColor, full, type, className, onDoubleClick, rowMargin, columnMargin, ...rest }) => {
    let boxStyle = {};
    if (type === "create") {
        boxStyle.boder = '1px solid #4096ff';
        boxStyle.width = "max-content";
        boxStyle.backgroundColor = `#4096ff`;
        boxStyle.color = '#ffffff';
    } else if (type === "edit") {
        boxStyle.boder = `1px solid #89d961`;
        boxStyle.width = "max-content";
        boxStyle.backgroundColor = `#89d961`;
        boxStyle.color = '#ffffff';
    } else if (type === "delete") {
        boxStyle.boder = `1px solid #ff7875`;
        boxStyle.width = "max-content";
        boxStyle.backgroundColor = `#ff7875`;
        boxStyle.color = '#ffffff';
    } else {
        boxStyle.boder = `1px solid ${bcolor}`;
        boxStyle.width = full ? "100%" : "max-content"
        boxStyle.backgroundColor = `${bgColor}`;
        boxStyle.color = `${color}`;
    }
    if (rowMargin) {
        boxStyle.marginLeft = '5px';
        boxStyle.marginRight = '5px';
    }
    if (columnMargin) {
        boxStyle.marginLeft = '5px';
        boxStyle.marginRight = '5px';
    }
    return (
        <Button className={className} style={boxStyle} onClick={onClick} onDoubleClick={onDoubleClick} rowMargin {...rest}>
            {children}
        </Button >
    );
};

index.defaultProps = {
    bcolor: "gray",
    disabled: false,
    icon: true,
    color: "#000000",
    bgColor: "#ffffff",
    full: false,
};

export default index;
