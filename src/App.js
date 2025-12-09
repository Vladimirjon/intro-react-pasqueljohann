import { useState } from "react";

// ==========================
// IMPORTACIÓN DE EJERCICIOS
// ==========================

// PDF 2 (Ejercicios 010–015)
import JSXBasico from "./ejercicios/10/JSX_Basico";
import EventosArrays from "./ejercicios/11/EventosyArrays";
import RecogidaDatos from "./ejercicios/12/useRef";
import UseRefEuros from "./ejercicios/13/useRef_Euros";
import UseRefGrados from "./ejercicios/14/useRef_Grados";
import UseRefSuperficie from "./ejercicios/15/useRef_Superficie";

// PDF 1 (Ejercicios 016–021)
import Estados from "./ejercicios/16/Estados";
import EurosADolares from "./ejercicios/17/EurosADolares";
import GradosAFahrenheit from "./ejercicios/18/GradosAFahrenheit";
import CalcularSuperficie from "./ejercicios/19/CalcularSuperficie";
import ValorConEstado from "./ejercicios/20/ValorConEstado";
import Componentes from "./ejercicios/21/Componentes";

// PDF 4 (Ejercicios 022–027)
import Dollars from "./ejercicios/22/Dollars";
import Grades from "./ejercicios/23/Grades";
import Area from "./ejercicios/23/Area";
import PropsBasico from "./ejercicios/24/PropsBasico";
import HijoPadre from "./ejercicios/25/HijoPadre";
import Post from "./ejercicios/26/Post";
import RenderizadoCondicional from "./ejercicios/27/RenderizadoCondicional";

// PDF 3 (Ejercicios 028–032)
import PropsCondicional from "./ejercicios/28/PropsCondicional";
import Viaje from "./ejercicios/29/Viaje";
import Arrays from "./ejercicios/30/Arrays";
import Estilos from "./ejercicios/31/Estilos";
import StyledComponents from "./ejercicios/32/StyledComponents";

// PDF 5 (Ejercicios 033–038)
import HoverHerencia from "./ejercicios/33/HoverHerencia";
import MediaQueries from "./ejercicios/34/MediaQueries";
import Speech from "./ejercicios/35/Speech";
import UseEffectBasic from "./ejercicios/37/UseEffectBasic";
import Rutinas from "./ejercicios/38/Rutinas";

function App() {
  const [vista, setVista] = useState("menu");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Ejercicios React – Johann Pasquel</h1>

      {/* MENÚ PRINCIPAL */}
      {vista === "menu" && (
        <div>
          <h2>Selecciona un ejercicio</h2>

          {/* PDF 2 */}
          <button onClick={() => setVista("010")}>010 – JSX Básico</button><br/><br/>
          <button onClick={() => setVista("011")}>011 – Eventos y Arrays</button><br/><br/>
          <button onClick={() => setVista("012")}>012 – Recogida de datos</button><br/><br/>
          <button onClick={() => setVista("013")}>013 – useRef Euros</button><br/><br/>
          <button onClick={() => setVista("014")}>014 – useRef Grados</button><br/><br/>
          <button onClick={() => setVista("015")}>015 – useRef Superficie</button><br/><br/>

          {/* PDF 1 */}
          <button onClick={() => setVista("016")}>016 – Estados</button><br/><br/>
          <button onClick={() => setVista("017")}>017 – Euros a Dólares</button><br/><br/>
          <button onClick={() => setVista("018")}>018 – °C a °F</button><br/><br/>
          <button onClick={() => setVista("019")}>019 – Superficie</button><br/><br/>
          <button onClick={() => setVista("020")}>020 – Valor con useState</button><br/><br/>
          <button onClick={() => setVista("021")}>021 – Componentes</button><br/><br/>

          {/* PDF 4 */}
          <button onClick={() => setVista("022")}>022 – Componente Euros</button><br/><br/>
          <button onClick={() => setVista("023G")}>023 – Conversión Grados</button><br/><br/>
          <button onClick={() => setVista("023A")}>023 – Área Rectángulo</button><br/><br/>
          <button onClick={() => setVista("024")}>024 – Props & Children</button><br/><br/>
          <button onClick={() => setVista("025")}>025 – Props hijo → padre</button><br/><br/>
          <button onClick={() => setVista("026")}>026 – Post Component</button><br/><br/>
          <button onClick={() => setVista("027")}>027 – Renderizado Condicional</button><br/><br/>

          {/* PDF 3 */}
          <button onClick={() => setVista("028")}>028 – Props condicional</button><br/><br/>
          <button onClick={() => setVista("029")}>029 – Viaje</button><br/><br/>
          <button onClick={() => setVista("030")}>030 – Arrays JSON</button><br/><br/>
          <button onClick={() => setVista("031")}>031 – Estilos</button><br/><br/>
          <button onClick={() => setVista("032")}>032 – Styled Components</button><br/><br/>

          {/* PDF 5 */}
          <button onClick={() => setVista("033")}>033 – Hover / Herencia / Atributos</button><br/><br/>
          <button onClick={() => setVista("034")}>034 – Media Queries / GlobalStyles</button><br/><br/>
          <button onClick={() => setVista("035")}>035–036 – Memorizar Speech</button><br/><br/>
          <button onClick={() => setVista("037")}>037 – useEffect</button><br/><br/>
          <button onClick={() => setVista("038")}>038 – Rutinas deportivas</button><br/><br/>
        </div>
      )}

      {/* VOLVER AL MENÚ */}
      {vista !== "menu" && (
        <button onClick={() => setVista("menu")} style={{ marginBottom: "20px" }}>
          ⬅ Volver al menú
        </button>
      )}

      {/* RENDER DE CADA EJERCICIO */}

      {/* PDF 2 */}
      {vista === "010" && <JSXBasico />}
      {vista === "011" && <EventosArrays />}
      {vista === "012" && <RecogidaDatos />}
      {vista === "013" && <UseRefEuros />}
      {vista === "014" && <UseRefGrados />}
      {vista === "015" && <UseRefSuperficie />}

      {/* PDF 1 */}
      {vista === "016" && <Estados />}
      {vista === "017" && <EurosADolares />}
      {vista === "018" && <GradosAFahrenheit />}
      {vista === "019" && <CalcularSuperficie />}
      {vista === "020" && <ValorConEstado />}
      {vista === "021" && <Componentes />}

      {/* PDF 4 */}
      {vista === "022" && <Dollars />}
      {vista === "023G" && <Grades />}
      {vista === "023A" && <Area />}
      {vista === "024" && <PropsBasico />}
      {vista === "025" && <HijoPadre />}
      {vista === "026" && <Post postTitle="Título" author="Autor">Contenido</Post>}
      {vista === "027" && <RenderizadoCondicional />}

      {/* PDF 3 */}
      {vista === "028" && <PropsCondicional />}
      {vista === "029" && <Viaje />}
      {vista === "030" && <Arrays />}
      {vista === "031" && <Estilos />}
      {vista === "032" && <StyledComponents />}

      {/* PDF 5 */}
      {vista === "033" && <HoverHerencia />}
      {vista === "034" && <MediaQueries />}
      {vista === "035" && <Speech />}
      {vista === "037" && <UseEffectBasic />}
      {vista === "038" && <Rutinas />}
    </div>
  );
}

export default App;
