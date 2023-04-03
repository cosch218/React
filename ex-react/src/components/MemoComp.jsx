import React, { Component } from 'react'

export class MemoComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memoList: [
                {id:1, memo:"기록", time:new Date()},
                {id:2, memo:"연습", time:new Date()}
            ],
            inputMemo: ""
        };
        this.id=3;
    }

    // 시간 값을 편하게 출력하기 위한 메소드
    // 출력 return을 통해서 화면에 출력 가능
    // 시간을 출력하기 위해 time 값 가져옴
    printClock = () => {
        const date = new Date();
        const hour = String(date.getHours()).padStart(2,"0");
        const minute = String(date.getMinutes()).padStart(2,"0");
        const second = String(date.getSeconds()).padStart(2,"0");
        return `${hour}시 ${minute}분 ${second}초`;
    }

    addMemo = () => {
        const newMemoList = this.state.memoList.concat(
            {
                // id++는 후위 연산자로 값의 할당(모든 연산)이 끝난 후에 1 증가시킨다
                id: this.id++,
                memo: this.state.inputMemo,
                time : this.printClock()
            }
        );
        this.setState({memoList: newMemoList});
    }

    deleteMemo = (id) => {
        // filter를 사용 : 동일한 id를 제외한 새로운 배열을 생성
        // filter의 함수 결과가 참일 때 배열 생성
        const newMemoList = this.state.memoList.filter((m) => m.id !== id);
        this.setState({memoList:newMemoList});
    }

    render() {
        return (
            <div>
                <h3>메모리스트 출력</h3>
                <input 
                    type="text" 
                    onChange={ (e) => {this.setState({inputMemo : e.target.value})} }
                    value={this.state.inputMemo}
                />
                <button
                    onClick={ this.addMemo }
                >
                    추가
                </button>
                
                <ul>
                    {
                        this.state.memoList.map((memo) =>
                            <li 
                                key={memo.id}
                                onClick={ () => {this.deleteMemo(memo.id)} }
                            >
                                {memo.id}. {memo.memo} 시간:{this.printClock()}
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default MemoComp