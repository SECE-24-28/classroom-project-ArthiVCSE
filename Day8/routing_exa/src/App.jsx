import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Gallary from './Gallary';
import PostPagee from './PostPagee';
import Postt from './Postt';
import NewPostt from './NewPostt';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallary">Gallary</Link></li>
        <li><Link to="/postpage">PostPage</Link></li>
      </ul>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/gallary" element={<Gallary />} />

                  <Route path="/postpage" element={<PostPagee />} >
                      <Route path=":id" element={<Postt/>} />
                      <Route path="newpost" element={<NewPostt/>} />
                  </Route>
      </Routes>
    </>
  );
}

export default App;