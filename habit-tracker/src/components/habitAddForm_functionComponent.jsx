import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
    // function component로 구현

    // function이기 때문에 지역변수로 설정 (const로 선언)
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name); // name이 비어있지 않다면 onAdd에 name 전달
        formRef.current.reset(); // onSubmit(Add버튼) 실행 후 input value 값 초기화
    };

    return (
        // <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}> // class 일 경우에는 변수에 접근할 때 this.변수명 이렇게 해야 했지만
        <form ref={formRef} className="add-form" onSubmit={onSubmit}> {/* function 일 경우 변수에 바로 접근이 가능함 */}
            <input
                ref={inputRef} // component가 브라우저에 표기가 되면 inputRef와 연결됌 -> 이 요소에 접근해서 해당하는 데이터를 읽어올 수 있음
                type="text"
                className="add-input"
                placeholder='Habit'
            />
            <button className="add-button">Add</button>
        </form>
    );
});

export default HabitAddForm;