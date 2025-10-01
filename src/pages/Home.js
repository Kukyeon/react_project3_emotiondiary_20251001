
import Button from "../component/Button";
import Editor from "../component/Editor";
import Header from "../component/Header";


const Home = () => {

    // const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get("memberid")); //request.getParameter("memberid") 유사

    return (
        <div>
            <Header title={"HOME"}
                leftChild={<Button type={"positive"} text={"긍정버튼"} onClick={()=>{alert("positive");}}/>}
                rightChild={<Button type={"negative"} text={"부정버튼"} onClick={()=>{alert("negative");}}/>}
            />
            <Editor 
                initData={{
                    date: new Date().getTime,
                    emotionId:1,
                    content:"이전에 작성했던 일기",
                }}
                onSubmit={() => {
                alert("작성 완료 버튼 클릭했음");
            }} />

        </div>
    );
}

export default Home;