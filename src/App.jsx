import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home/home';
import { Posts } from './pages/Posts/posts';
import { Error } from './pages/Error/error';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
