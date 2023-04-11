import { Link } from 'react-router-dom';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function About() {
    // location을 이용하여 값을 가져오면 다른 값들도 함께 들고 온다
    // 단점 : 쿼리스트링을 그대로 들고 오기 때문에 값을 구분하여 작성해야 함
    const location = useLocation();
    //내용 확인을 위한 console.log()
    console.log(location);

    // 쿼리스트링의 값을 구분해서 사용하기 위함
    const [searchParams, setSearchParams] = useSearchParams();
    //  \?이름=값&이름=값 으로 작성된 뭐리스트링 중 get()을 통해서 ()안에 이름을 적어서 값을 가져올 수 있다
    const nameText = searchParams.get("name");
    return (
        <div>
            <h1>About</h1>
            <p>현재 화면은 About 입니다.</p>
            <p>{location.search} : 쿼리스트링으로 가져온 값</p>
            <p>{nameText} : 쿼리스트링으로 가져온 값</p>
            {/** Home과 Story로 이동하는 Link 작성 */}
            <Link to={"/"}>Home</Link>
            <Link to={"/story"}>Story</Link>
        </div>
    )
}
