import React from "react"
import "./EmotionItem.css"


const EmotionItem = ({ id, img, name, onClick, isSelected }) => {

    // id = 감정 이미지의 아이디
    // img = 감정 이미지의 주소
    // name = 감정 이미지의 이름
    // onClick = 감정 이미지를 클릭하면 동작하는 이벤트 핸들러
    // isSelected = 감정 이미지의 섡택 여부 (이미지에 따른 별도 스타일 적용)

    const handleOnClick = () => {
        onClick(id);
    };

    return(
      <div className={["EmotionItem",
        isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`, ].join(" ")} 
        onClick={handleOnClick}>
        <img alt={`emotion${id}`} src={img}/>
        <span>{name}</span>
      </div>  
    );
};

export default EmotionItem;