import React from 'react'

import Primeiro from './components/basicos/Primeiro' // Por ser um export default não necessariamente o nome do componente deve ser o mesmo que o componente exportado 
import ComParametro from './components/basicos/ComParamentro'
import Fragmento from './components/basicos/Fragmento'
import Random from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

// eslint-disable-next-line import/no-anonymous-default-export
export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Card titulo="Exemplo de Card"> 
        
        </Card>
        <Random min={1} max={10000}/>
        <Fragmento />
        <ComParametro
            titulo="Situação Aluno:"
            aluno="Roberto Neto"
            nota={9.3}
        />
        <Primeiro></Primeiro>
    </div>