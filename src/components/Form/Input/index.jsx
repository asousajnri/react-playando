import React from 'react';

import { Container, LogInput } from './styles';

const Input = ({ 
	placeholder, 
	refInput, 
	onChange,
	onKeyPress,
	onKeyDown,
	logFieldPopup,
}) => {
  return (
    <Container>
	    {logFieldPopup && (
		   	<LogInput
			   	type={logFieldPopup.type}
			  	className={logFieldPopup.isShow && 'is-active'} 	
				>
					<p>
			    	{logFieldPopup.text}
		    	</p>
		    	
		    	<i onClick={logFieldPopup.onClick} className="far fa-times-circle"></i>
		  	</LogInput>
		  )}
      <input 
      	ref={refInput} 
      	placeholder={placeholder} 
      	onChange={onChange}
      	onKeyPress={onKeyPress}
      	onKeyDown={onKeyDown}
      />
    </Container>
  );
};

export default Input;
