import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro' // Por ser um export default não necessariamente o nome do componente deve ser o mesmo que o componente exportado 
import ComParametro from './components/basicos/ComParamentro'


ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situação Aluno:" 
            aluno="Roberto Neto"
            nota={9.3}/>
    </div>, 
    document.getElementById('root')
)