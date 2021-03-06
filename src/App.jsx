import './App.css'
import React from 'react'

import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Primeiro from './components/basicos/Primeiro' // Por ser um export default não necessariamente o nome do componente deve ser o mesmo que o componente exportado 
import ComParametro from './components/basicos/ComParamentro'
import Fragmento from './components/basicos/Fragmento'
import Random from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

// eslint-disable-next-line import/no-anonymous-default-export
export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#06 - Repetição" color="#160A47">
                <ListaAlunos/>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#354458">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="João" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#DB3340">
                <Random min={1} max={10000} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E8B71A">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#1FDA9A">
                <ComParametro
                    titulo="Situação Aluno:"
                    aluno="Roberto Neto"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#28ABE3">
                <Primeiro></Primeiro>
            </Card>

        </div>
    </div>