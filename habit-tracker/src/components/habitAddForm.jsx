import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {

    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = (event) => { 
        event.preventDefault(); // 브라우저 기본 기능 취소: onSubmit 사용 시 refresh 되거나 기본적으로 다른 페이지로 가는 것을 예상하고 있음. 따라서 이 코드를 사용해서 브라우저 기본기능(refresh, 다른 페이지로 이동 등)을 취소함.
        //console.log(this.inputRef.current.value);
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name); // name이 비어있지 않다면 onAdd에 name 전달
       // this.inputRef.current.value = ''; // onSubmit(Add버튼) 실행 후 input value 값 초기화 -> formRef 대신 이렇게 사용가능 (formRef가 정석적인 방법)
        this.formRef.current.reset(); // onSubmit(Add버튼) 실행 후 input value 값 초기화
    };

    render() {
        console.log('habitAddForm');
        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input
                    ref={this.inputRef} // component가 브라우저에 표기가 되면 inputRef와 연결됌 -> 이 요소에 접근해서 해당하는 데이터를 읽어올 수 있음
                    type="text"
                    className="add-input"
                    placeholder='Habit'
                />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;