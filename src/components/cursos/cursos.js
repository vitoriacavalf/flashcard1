// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row } from 'react-materialize';

import Curso from "./curso";


const Cursos = () => {
  return (
    <Row>
          <h5>Cursos</h5>
          <Curso 
            titulo="Física"
            descricao="ciência que investiga as leis do universo no que diz respeito à matéria e à energia, que são seus constituintes, e suas interações." />

          <Curso 
            titulo="Química"
            descricao="estudo científico da constituição da matéria, suas propriedades, transformações e as leis que as regem." />
    </Row>
  )
};

export default Cursos;