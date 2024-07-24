import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListAlumnos from '../pages/listAlumno';
import Dashboard from "../pages/Dash";
function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<ListAlumnos />} />
          {/*   <Route path="/Horarios" element={<Horario />} /> */}
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;