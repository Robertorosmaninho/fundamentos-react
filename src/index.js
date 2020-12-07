import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro' // Por ser um export default não necessariamente o nome do componente deve ser o mesmo que o componente exportado 


ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
    
    </div>, 
    document.getElementById('root')
)