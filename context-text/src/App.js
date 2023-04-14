import './App.css';
import Toolbar from './components/Toolbar';

// App에서 쓰기 위해 작성한 ThemeContext 컴포넌트 호출
import ThemeContext from './context/ThemeContext';
import ObjectContext from './context/ObjectContext';
import { DataProvider } from './context/DataContext';
import ContextBox from './components/ContextBox';
import DataBox from './components/DataBox';
import DataPrint from './components/DataPrint';


// ObjectContext.Provider의 value값을 따로 변수에 저장해서 사용할 수 있다
// >> 변수의 값이 많다면 확인하기 힘들다
// >> Context를 만들 때, value 값도 함께 작성해서 만들기
const initValue = {name: "홍길동", login:true}

function App() {
  return (
    <div className="App">
      {/** 작성한 context를 값을 사용할 컴포넌트를 감싸서 사용*/}
      <ThemeContext.Provider value='light'>
        <ObjectContext.Provider value={ initValue }>
          {/** ThemeContext와 ObjectContext 값 확인 */}
          <Toolbar/>
        </ObjectContext.Provider>
      </ThemeContext.Provider>

      {/** ContextBox를 호출해서 ThemeContext를 이용하여 blue라는 값 전달하기 */}
      <ThemeContext.Provider value='blue'>
        <ContextBox />
      </ThemeContext.Provider>

      {/** DataContext를 이용해서 value 값을 전달한 DataProvider 사용 */}
      <DataProvider>
        <DataBox />
        <DataPrint />
      </DataProvider>
    </div>
  );
}

export default App;
