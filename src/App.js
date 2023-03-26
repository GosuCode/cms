import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './component/HOC/Navigation/Layout';
import Media from './component/pages/Media';
import Home from './component/pages/Home';
import Pages from './component/pages/Pages';
import Posts from './component/pages/Posts';

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
    </Routes>
  </Layout>
</Router>
    </>
  );
}

export default App;
