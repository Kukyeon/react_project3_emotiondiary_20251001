
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
            <Editor />

        </div>
    );
}

export default Home;