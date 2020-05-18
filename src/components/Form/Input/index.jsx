import React from 'react';

import { Container, LogInput } from './styles';

const Input = ({ 
	placeholder, 
	refInput, 
	onChange,
	onKeyPress,
	onKeyDown,
	logPopup,
}) => {
  return (
    <Container>
	    {logPopup && (
		   	<LogInput
			  	className={logPopup.isShow && 'is-active'} 	
				>
					<p>
			    	{logPopup.text}
		    	</p>
		    	
		    	{logPopup.type === 'alert' && (<span onClick={logPopup.clickClose}>x</span>)}
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
