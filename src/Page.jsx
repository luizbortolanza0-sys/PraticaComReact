// Em src/App.js
import { Routes, Route } from 'react-router-dom';
import App from './App';

function Page() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
}

export default Page;