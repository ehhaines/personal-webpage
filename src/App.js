import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './home/index.js';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Blog from './blog/index.js';
import NotFound from './notFound/index.js';
import About from './about/index.js';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index element={<HomeComponent/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
