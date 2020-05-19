import React from 'react';

import { Container, LogInput } from './styles';

const Input = ({ 
	placeholder, 
	refInput, 
	onChange,
	onKeyPress,
	onKeyDown,
	notifyField,
}) => {
  return (
    <Container>
	    {notifyField && (
		   	<LogInput
			   	type={notifyField.type}
			  	className={notifyField.visible && 'is-active'} 	
				>
					<p>
			    	{notifyField.text}
		    	</p>
		    	
		    	<i onClick={notifyField.onClick} className="far fa-times-circle"></i>
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
