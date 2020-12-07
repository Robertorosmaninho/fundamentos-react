import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const newMin = Math.ceil(props.min);
    const newMax = Math.floor(props.max);
    return Math.floor(Math.random() * (newMax - newMin)) + newMin;
};