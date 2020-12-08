import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <div>
            {/* {React.cloneElement(props.children, {...props})} --> Pra um elemento*/}
            {/*
                React.Children.map(props.children, (el) => {
                    return React.cloneElement(el, {...props})
                })
            */}
            {props.children.map((child, i) => {
                return React.cloneElement(child, {...props, key: i});
            })}
        </div>
    )
}