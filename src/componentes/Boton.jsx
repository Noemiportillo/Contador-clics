import React from 'react'

const Boton = ({ texto, esBotonClick, hacerClick }) => {
  return (
    <button
		 	className={ esBotonClick ? 'boton-click' : 'boton-reiniciar' }
		 	onClick={hacerClick}>
			{texto}
		</button>
  )
}

export default Boton