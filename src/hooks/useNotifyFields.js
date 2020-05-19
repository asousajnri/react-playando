import { useState } from 'react';

const useNotifyFields = () => {
	const [
		visible, 
		setVisible
	] = useState(false);
	
	const [
		type,
		setType
	] = useState('default');
	
	const [
		text,
		setText
	] = useState('');
	
	const setValues = (type, text) => {
		setVisible(!visible);
		
		if(type) setType(type);
		if(text) setText(text)
	};
	
	return {
		visible,
		visibleOn: () => setVisible(!visible),
		visibleOff: () => setVisible(!visible),
		type,
		text,
		setValues,
	}
};

export default useNotifyFields;