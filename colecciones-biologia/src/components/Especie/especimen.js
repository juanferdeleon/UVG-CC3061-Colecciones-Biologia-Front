import React from "react";
import logo from "../../img/logocolecciones.png";
import {Styles} from "./style.scss";
// import the progress bar
import StepProgressBar from 'react-step-progress';
// import the stylesheet
import 'react-step-progress/dist/index.css';

//datos generales
const step1Content = <div>
  <h3>Datos Generales</h3>
  <div class="animation-container">
              <form action="" name="form-step-1">
                <div class="fieldgroup">
                  <input type="text" name="codigo" id="codigo" />
                  <label for="codigo">Código</label>
                </div>

                <div class="fieldgroup">
                  <input type="text" name="comun_name" id="comun_name" />
                  <label for="comun_name">Nombre Común</label>
                </div>

                <div class="fieldgroup">
                  <input type="text" name="sci_name" id="sci_name" />
                  <label for="sci_name">Nombre Científico</label>
                </div>
                
                <div class="buttons">
                  <div class="dropdown">
                    <button class="btn btn-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Departamento
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>
                  <div class="buttons">

                  <div class="dropdown">
                    <button class="btn btn-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Municipio
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>

                <div class="fieldgroup">
                  <input type="text" name="locality" id="locality" />
                  <label for="locality">Localidad</label>
                </div>

                <div class="fieldgroup">
                  <input type="number" name="latitud" id="latitud" />
                  <label for="latitud">Latitud</label>
                </div>

                <div class="fieldgroup">
                  <input type="number" name="longitud" id="longitud" />
                  <label for="longitud">Longitud</label>
                </div>

                <div class="fieldgroup">
                  <input type="number" name="altitud" id="altitud" />
                  <label for="altitud">Altitud msnm</label>
                </div>

                <div class="fieldgroup">
                  <input type="number" name="insertidumbre" id="insertidumbre" />
                  <label for="insertidumbre">Insertidumbre</label>
                </div>


                <div class="fieldgroup">
                  <input type="text" name="collector_name" id="collector_name" />
                  <label for="collector_name">Nombre del Colector</label>
                </div>
                <h6 >Hora de Colecta</h6>
                <div class="fieldgroup">
                  <input type="time" name="collect_time" id="collect_time" />
                </div>
                <h6 >Fecha de Colecta</h6>
                <div class="fieldgroup">
                  <input type="date" name="collect_date" id="collect_date" />
                </div>
        </form>
  </div>
  </div>;
const step2Content = <div>
<h3>Datos Generales</h3>
<div class="animation-container">
            <form action="" name="form-step-1">
              <div class="buttons">
                <div class="dropdown">
                  <button class="btn btn-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Reino
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" >Action</a>
                    <a class="dropdown-item" >Another action</a>
                    <a class="dropdown-item" >Something else here</a>
                  </div>
                </div>
              </div>
                <div class="buttons">

                <div class="dropdown">
                  <button class="btn btn-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filo
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" >Action</a>
                    <a class="dropdown-item" >Another action</a>
                    <a class="dropdown-item" >Something else here</a>
                  </div>
                </div>
              </div>

              <div class="buttons">
                <div class="dropdown">
                  <button class="btn btn-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Clase
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" >Action</a>
                    <a class="dropdown-item" >Another action</a>
                    <a class="dropdown-item" >Something else here</a>
                  </div>
                </div>
              </div>

              <div class="buttons">
                <div class="dropdown">
                  <button class="btn btn-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Orden
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" >Action</a>
                    <a class="dropdown-item" >Another action</a>
                    <a class="dropdown-item" >Something else here</a>
                  </div>
                </div>
              </div>

              <div class="buttons">
                <div class="dropdown">
                  <button class="btn btn-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Familia
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" >Action</a>
                    <a class="dropdown-item" >Another action</a>
                    <a class="dropdown-item" >Something else here</a>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>


              
      </form>
</div>
</div>;
const step3Content = <div>
<h3>Datos Miscelaneos</h3>
<div class="animation-container">
            <form action="" name="form-step-1">
              <div class="fieldgroup">
                <input type="file" name="codigo" id="codigo" />
                <label for="codigo">Seleccione Imagenes</label>
              </div>
              <h6>Comentarios del Colector</h6>
              <div class="fieldgroup">
                <textarea type="text" name="collector_coments" id="collector_coments" />
              </div>
      </form>
</div>
</div>;
const step4Content = <div>
<h3>Datos de Curacion</h3>
<div class="animation-container">
            <form action="" name="form-step-1">
            <div class="buttons">
                <div class="dropdown">
                  <button class="btn btn-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Habitat
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" >Action</a>
                    <a class="dropdown-item" >Another action</a>
                    <a class="dropdown-item" >Something else here</a>
                  </div>
                </div>
              </div>
              <br></br>
              <h6>Comentarios </h6>
              <div class="fieldgroup">
                <textarea type="text" name="collector_coments" id="collector_coments" />
              </div>

              <div class="buttons">
                <div class="dropdown">
                  <button class="btn btn-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Etapa de vida
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" >Action</a>
                    <a class="dropdown-item" >Another action</a>
                    <a class="dropdown-item" >Something else here</a>
                  </div>
                </div>
              </div>

              <div class="buttons">
                <div class="dropdown">
                  <button class="btn btn-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sexo
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" >Action</a>
                    <a class="dropdown-item" >Another action</a>
                    <a class="dropdown-item" >Something else here</a>
                  </div>
                </div>
              </div>

              <div class="buttons">
                <div class="dropdown">
                  <button class="btn btn-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Preparacion
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" >Action</a>
                    <a class="dropdown-item" >Another action</a>
                    <a class="dropdown-item" >Something else here</a>
                  </div>
                </div>
              </div>

              <div class="buttons">
                <div class="dropdown">
                  <button class="btn btn-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Base de Registro
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" >Action</a>
                    <a class="dropdown-item" >Another action</a>
                    <a class="dropdown-item" >Something else here</a>
                  </div>
                </div>
              </div>

      </form>
</div>
</div>;


const onFormSubmit = () =>{
  console.log('hola')
}


const NewEspecie = () => {
  return (
    <div className="especimen-container">
      <section class="section">
      <h1>Formulario de Ingreso Nuevo Especimen</h1>
      <StepProgressBar
        startingStep={3}
        onSubmit={onFormSubmit}
        steps={[
          {
            /*label: 'Step 1',
            subtitle: '%',
            name: 'step 1',*/
            content: step1Content,
          },
          {
            content: step2Content,
            /*validator: step2Validator*/
          },
          {
            content: step3Content,
            /*validator: step3Validator*/
          },
          {
            content: step4Content,
            /*validator: step3Validator*/
          }
        ]}
        
      />      
</section>
</div>
  );
};





export default NewEspecie;