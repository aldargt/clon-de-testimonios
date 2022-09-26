import './App.css';
import datosTestimonios from './datos/datosTestimonios';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre={datosTestimonios.persona3.nombre}
          pais={datosTestimonios.persona3.pais}
          imagen={datosTestimonios.persona3.imagen}
          alt={datosTestimonios.persona3.alt}
          cargo={datosTestimonios.persona3.cargo}
          empresa={datosTestimonios.persona3.empresa}
          testimonio={datosTestimonios.persona3.testimonio} 
        />
        <Testimonio
          nombre={datosTestimonios.persona1.nombre}
          pais={datosTestimonios.persona1.pais}
          imagen={datosTestimonios.persona1.imagen}
          alt={datosTestimonios.persona1.alt}
          cargo={datosTestimonios.persona1.cargo}
          empresa={datosTestimonios.persona1.empresa}
          testimonio={datosTestimonios.persona1.testimonio} 
        />
        <Testimonio
          nombre={datosTestimonios.persona2.nombre}
          pais={datosTestimonios.persona2.pais}
          imagen={datosTestimonios.persona2.imagen}
          alt={datosTestimonios.persona2.alt}
          cargo={datosTestimonios.persona2.cargo}
          empresa={datosTestimonios.persona2.empresa}
          testimonio={datosTestimonios.persona2.testimonio} 
        />
      </div>
    </div>
  );
}

export default App;
