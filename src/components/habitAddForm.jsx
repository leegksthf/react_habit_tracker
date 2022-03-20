import React, { memo } from 'react';

const HabitAddForm = memo(props => {
    const inputRef = React.createRef();   // 데이터 읽어올 수 있음. == value
    const formRef = React.createRef();

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(this.inputRef.current.value);
        const name = inputRef.current.value;
        name && props.onAdd(name);
        // this.inputRef.current.value = '';
        formRef.current.reset();
    };

    return (
        <form className="add-form" ref={formRef} onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className="add-input" placeholder='Plz enter your habit' />
            <button className="add-button">Add</button>
        </form>
    );
});

export default HabitAddForm;