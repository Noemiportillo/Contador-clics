import React from 'react';
import '../styles/contador.css';

const Contador = ({ numeroClicks }) => {
  return (
    <div className='contador'>
			{numeroClicks}
		</div>
  )
}

export default Contador