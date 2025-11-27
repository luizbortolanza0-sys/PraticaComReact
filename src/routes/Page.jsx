// Em src/App.js
import { Routes, Route } from 'react-router-dom';
import App from '../pages/App.jsx';
import Extra from '../pages/Extra.jsx'

function Page() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/quote" element = {<Extra />} />
    </Routes>
  );
}

export default Page;