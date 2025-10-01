import "./Editor.css"
import { useEffect, useState } from "react";
import { emotionList, getFormattedDate } from "../util";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import EmotionItem from "./EmotionItem";

//props initData 는 입력창 또는 수정창에서 다르게 보여질 입력내용
//수정 -> 기존에 입력한 내용이 출력되어야 함



//onsubmit 은 작성완료 버튼을 클릭했을때 실행되는 이벤트 핸들러 함수
const Editor = ({initData , onSubmit }) => {

    // const [date , setDate] = useState("")
    // const [emotionId , setEmotionId] = useState("")
    // const [content , setContent] = useState("")
        const navigate = useNavigate();

        const [state , setState] = useState({
            date: getFormattedDate(new Date()),
            emotionId:3,
            content:""
        });

        useEffect(() => {
            if (initData) {
                setState({ // 참이면 - > 수정하기 실행 / 거짓이면 - > 새글쓰기 실행
                    ...initData,
                    date: getFormattedDate(new Date(parseInt(initData.date))),
                    //date값 ->getTime-> 정수 -> 날짜형식 -> yyyy-mm-dd 로 변경
                });
            }
        },[initData]);
        const handleChangeDate = (e) => {
            setState({ //state 객체 내의 날자 속성값 변경하기
                ...state,
                date: e.target.value,
            });
        };
        const handleChangeContent = (e) => {
            setState({ //state 객체 내의 컨텐츠 속성값 변경하기
                ...state,
                content: e.target.value,
            });
        };
        const handleSubmit = () => {
            onSubmit(state);
        };
        const handleOnGoBack = () => {
            navigate(-1);
        };
        //이미지 클릭 이벤트 핸들러
        const handleChangeEmotion = (emotionId) => {
            setState({
                ...state,
                emotionId,
            });
        };

    return(
        <div className="Editor"> 
            <div className="editor_section">
                <h4>오늘의 날짜</h4>
                {/* 날자 입력창 */}
                <div className="input_wrapper">
                    <input type="date" value={state.date} onChange={handleChangeDate} />
                </div>
            </div>
            <div className="editor_section">
                <h4>오늘의 감정</h4>
                {/* 감정 이미지 선택창 */}
                <div className="input_wrapper emotion_list_wrapper">
                    {emotionList.map((item) => (
                    <EmotionItem
                        key={item.id} {...item} 
                        onClick={handleChangeEmotion} 
                        isSelected={state.emotionId === item.id} />
                    ))}
                </div>
            </div>
            <div className="editor_section">
                <h4>오늘의 일기</h4>
                {/* 일기 입력 또는 수정 */}
                <div className="input_wrapper">
                    <textarea 
                        placeholder="오늘은 어땠나요?" 
                        value={state.content}
                        onChange={handleChangeContent}/>
                </div>
            </div>
            <div className="editor_section button_section">
                {/* 작성완료버튼  , 취소버튼 */}
                <Button text={"취소하기"} onClick={handleOnGoBack} />
                <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit} />
            </div>
        </div>
    );
}

export default Editor;