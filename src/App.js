import { useState } from "react";
import "./App.css";


// PDF 2 (010–015)
import JSXBasico from "./ejercicios/10/JSX_Basico";
import EventosArrays from "./ejercicios/11/EventosyArrays";
import RecogidaDatos from "./ejercicios/12/useRef";
import UseRefEuros from "./ejercicios/13/useRef_Euros";
import UseRefGrados from "./ejercicios/14/useRef_Grados";
import UseRefSuperficie from "./ejercicios/15/useRef_Superficie";

// PDF 1 (016–021)
import Estados from "./ejercicios/16/Estados";
import EurosADolares from "./ejercicios/17/EurosADolares";
import GradosAFahrenheit from "./ejercicios/18/GradosAFahrenheit";
import CalcularSuperficie from "./ejercicios/19/CalcularSuperficie";
import ValorConEstado from "./ejercicios/20/ValorConEstado";
import Componentes from "./ejercicios/21/Componentes";

// PDF 4 (022–027)
import Dollars from "./ejercicios/22/Dollars";
import Grades from "./ejercicios/23/Grades";
import Area from "./ejercicios/23/Area";
import PropsBasico from "./ejercicios/24/PropsBasico";
import HijoPadre from "./ejercicios/25/HijoPadre";
import Post from "./ejercicios/26/Post";
import RenderizadoCondicional from "./ejercicios/27/RenderizadoCondicional";

// PDF 3 (028–032)
import PropsCondicional from "./ejercicios/28/PropsCondicional";
import Viaje from "./ejercicios/29/Viaje";
import Arrays from "./ejercicios/30/Arrays";
import Estilos from "./ejercicios/31/Estilos";
import StyledComponents from "./ejercicios/32/StyledComponents";

// PDF 5 (033–038)
import HoverHerencia from "./ejercicios/33/HoverHerencia";
import MediaQueries from "./ejercicios/34/MediaQueries";
import Speech from "./ejercicios/35/Speech";
import UseEffectBasic from "./ejercicios/37/UseEffectBasic";
import Rutinas from "./ejercicios/38/Rutinas";

function App() {
  const [vista, setVista] = useState("menu");

  const categorias = {
    "Fundamentos JSX y Eventos": [
      { id: "010", name: "010 – JSX Básico", component: <JSXBasico /> },
      { id: "011", name: "011 – Eventos y Arrays", component: <EventosArrays /> },
      { id: "012", name: "012 – Recogida de Datos", component: <RecogidaDatos /> },
    ],

    "useRef y useState": [
      { id: "013", name: "013 – useRef Euros", component: <UseRefEuros /> },
      { id: "014", name: "014 – useRef Grados", component: <UseRefGrados /> },
      { id: "015", name: "015 – Superficie useRef", component: <UseRefSuperficie /> },
      { id: "016", name: "016 – Estados", component: <Estados /> },
      { id: "017", name: "017 – Euros a Dólares", component: <EurosADolares /> },
      { id: "018", name: "018 – °C a °F", component: <GradosAFahrenheit /> },
      { id: "019", name: "019 – Superficie", component: <CalcularSuperficie /> },
      { id: "020", name: "020 – Valor con useState", component: <ValorConEstado /> },
    ],

    "Componentes y Props": [
      { id: "021", name: "021 – Componentes", component: <Componentes /> },
      { id: "022", name: "022 – Componente Euros", component: <Dollars /> },
      { id: "023G", name: "023 – Conversión Grados", component: <Grades /> },
      { id: "023A", name: "023 – Área Rectángulo", component: <Area /> },
      { id: "024", name: "024 – Props & Children", component: <PropsBasico /> },
      { id: "025", name: "025 – Props hijo → padre", component: <HijoPadre /> },
      { id: "026", name: "026 – Post Component", component: <Post postTitle="Título" author="Autor">Contenido</Post> },
      { id: "027", name: "027 – Renderizado Condicional", component: <RenderizadoCondicional /> },
      { id: "028", name: "028 – Props Condicional", component: <PropsCondicional /> },
      { id: "029", name: "029 – Viaje", component: <Viaje /> },
    ],

    "JSON, Estilos y Styled Components": [
      { id: "030", name: "030 – Arrays JSON", component: <Arrays /> },
      { id: "031", name: "031 – Estilos", component: <Estilos /> },
      { id: "032", name: "032 – Styled Components", component: <StyledComponents /> },
      { id: "033", name: "033 – Hover / Herencia / Atributos", component: <HoverHerencia /> },
      { id: "034", name: "034 – Media Queries / GlobalStyles", component: <MediaQueries /> },
    ],

    "Aplicaciones completas": [
      { id: "035", name: "035–036 – Memorizar Speech", component: <Speech /> },
      { id: "037", name: "037 – useEffect", component: <UseEffectBasic /> },
      { id: "038", name: "038 – Rutinas Deportivas", component: <Rutinas /> },
    ],
  };

  // Render dinámico
  const selectedComponent =
    Object.values(categorias)
      .flat()
      .find((ej) => ej.id === vista)?.component;

  return (
    <div className="app-container">
      <h1>Ejercicios React – Johann Pasquel</h1>

      {vista === "menu" && (
        <div className="menu">
          {Object.entries(categorias).map(([categoria, ejercicios]) => (
            <div key={categoria} className="category-block">
              <h2>{categoria}</h2>
              {ejercicios.map((ej) => (
                <button key={ej.id} onClick={() => setVista(ej.id)}>
                  {ej.name}
                </button>
              ))}
              <hr />
            </div>
          ))}
        </div>
      )}

      {vista !== "menu" && (
        <>
          <button className="back-btn" onClick={() => setVista("menu")}>
            ⬅ Volver al menú
          </button>

          <div className="exercise-card">{selectedComponent}</div>
        </>
      )}
    </div>
  );
}

export default App;