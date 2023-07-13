import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ArticleList from './pages/ArticleList';
import Article from './pages/Article';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/article' element={<ArticleList/>}>
          <Route path='/article/:id' element={<Article/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
