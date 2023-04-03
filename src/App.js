import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './component/HOC/Navigation/Layout';
import Media from './component/pages/Media';
import Home from './component/pages/Home';
import Pages from './component/pages/Pages';
import Posts from './component/pages/Posts';
import ViewMore from './component/Blog/View/ViewMore';
import Index from './component/Blog/Index';
import Login from './component/Login/Login';

function App() {
  return (
    <>
<Router>
  <Layout>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pages' element={<Pages/>}/>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/media' element={<Media/>}/>
      <Route path='/viewmore' element={<ViewMore/>}/>
      <Route path='/index' element={<Index/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/viewmore/:id' element={<ViewMore/>}/>
    </Routes>
  </Layout>
</Router>
    </>
  );
}

export default App;
