import React from 'react';
import FamiliaMembro from './FamiliaMembro'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <div>
            <FamiliaMembro nome="Pedro" {...props}/> 
            <FamiliaMembro nome="Ana" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="João" sobrenome="Silva"/>
        </div>
    )
}