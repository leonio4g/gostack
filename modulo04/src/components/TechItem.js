import React from 'react';
import PropsTypes from 'prop-types'


function TechItem({tech, onDelete}){
  return(
    <li key={tech}>
       {tech}
       <button 
       onClick={onDelete}
       type="button">Remover</button>
       </li>
  )
}

TechItem.defaultProps = {
  tech:'Oculto',
};

TechItem.PropsTypes = {
  tech:PropsTypes.string,
  onDelete: PropsTypes.func.isRequired,
}

export default TechItem;