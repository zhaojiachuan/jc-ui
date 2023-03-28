import React, { useState } from "react";
import { Button } from "antd";
import _ from "lodash";
const index = ({
    borderColor,
    color,
    bgColor,
    editType,
    rowMargin,
    columnMargin,
    debounce,
    debounceTime,
    ...props
}) => {
    const [loading, setLoading] = useState(false)
    const loadFun = props.onClick
    const newFun = _.debounce(() => {
        setLoading(true)
        loadFun()
        setTimeout(() => {
            setLoading(false)
        }, debounceTime)
    }, debounceTime, {
        'leading': true
    })
    let boxStyle = {};
    if (editType === "create") {
        boxStyle.boder = '1px solid #4096ff';
        boxStyle.width = "max-content";
        boxStyle.backgroundColor = `#4096ff`;
        boxStyle.color = '#ffffff';
    } else if (editType === "edit") {
        boxStyle.boder = `1px solid #89d961`;
        boxStyle.width = "max-content";
        boxStyle.backgroundColor = `#89d961`;
        boxStyle.color = '#ffffff';
    } else if (editType === "delete") {
        boxStyle.boder = `1px solid #ff7875`;
        boxStyle.width = "max-content";
        boxStyle.backgroundColor = `#ff7875`;
        boxStyle.color = '#ffffff';
    } else {
        boxStyle.boder = `1px solid ${borderColor}`;
        boxStyle.width = "max-content"
        boxStyle.backgroundColor = `${bgColor}`;
        boxStyle.color = `${color}`;
    }
    if (rowMargin) {
        boxStyle.marginLeft = '5px';
        boxStyle.marginRight = '5px';
    }
    if (columnMargin) {
        boxStyle.marginTop = '8px';
        boxStyle.marginBottom = '8px';
    }
    if (debounce) {
        props.loading = loading
        props.onClick = newFun
    }
    return (
        <Button
            style={boxStyle}
            rowMargin columnMargin {...props}
        >{props.children}</Button>
    );
};
// 没有继承antd样式之前的基本样式
// index.defaultProps = {
//     borderColor: "gray",
//     disabled: false,
//     icon: true,
//     color: "#000000",
//     bgColor: "#ffffff",
//     full: false,
// };

export default index;
