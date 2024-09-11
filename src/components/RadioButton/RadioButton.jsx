import styles from './RadioButton.module.css';

function RadioButton({children, name, checked, onChange, id, value, ...props}) {

	return (
		<>
			<input {...props} type="radio" className={styles['input']}
				id={id}
				name={name} 
				checked={checked}
				onChange={onChange}
				value={value}
			/>
			<label htmlFor={id}>{children}</label>
		</>
	);
}

export default RadioButton;