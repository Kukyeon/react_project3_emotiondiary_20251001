import "./Editor.css"

//props initData 는 입력창 또는 수정창에서 다르게 보여질 입력내용
//수정 -> 기존에 입력한 내용이 출력되어야 함

import { useState } from "react";

//onsubmit 은 작성완료 버튼을 클릭했을때 실행되는 이벤트 핸들러 함수
const Editor = ({initData , onSubmit }) => {

    const [state , serState] = useState({})

    return(
        <div className="Editor"> 
            <div className="editor_section">
                <h4>오늘의 날짜</h4>
                {/* 날자 입력창 */}
            </div>
            <div className="editor_section">
                <h4>오늘의 감정</h4>
                {/* 감정 이미지 선택창 */}
            </div>
            <div className="editor_section">
                <h4>오늘의 일기</h4>
                {/* 일기 입력 또는 수정 */}
            </div>
            <div className="editor_section">
                {/* 작성완료버튼  , 취소버튼 */}
            </div>
        </div>
    );
}

export default Editor;