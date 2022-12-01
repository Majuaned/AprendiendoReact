import React from 'react';
import ReactDom from 'react-dom/client'; //esta librería es para manipular el dom, con la biblioteca cliente...
import { FunEnFun } from './FunEnFun';
import { ModuloUno,ModuloDos } from "./DosModulos";
import { PropsUno } from "./PropsUno";

//const rootParaModificar = document.getElementById('root'); // con esta linea selecciono el elemento html al q voy a agregar las cosas q quiera

//desde ReacDom voy a usar el método createRot, el cual espera un CONTENEDOR para crear elementos html... para no hacer otra línea con otra constante, cargo la selección dentro del método createRot y le guardo en una variable conocida como...aplicacioón inicial de react o ELEMENTO ROOT:

const root = ReactDom.createRoot(document.getElementById('root')); //con esto se tiene la aplicación de react inicializada... para decirle a react q voy a colocar dentro de la aplicación utilizare la variable y el método render..el cual espera children o elementos hijos, estos elementos son HTML!!!!

root.render(<h1>Hola Juanchoooo</h1>)
/* 
                root.render(<h2>como estas</h2>) 
si pongo esta segunda línea, se renderizará esta y no la otra, por lo visto queda lo último q se renderizo...un renderizado por vez!!! */

// Y CON ESTO TENEMOS NUESTRA APLICACIÓN CREADA CON REACT...sin escribir prácticamente líneas de html, sino creando elementos html desde js..
//Si voy a la consola e inspecciono los elementos y veo el div con id root, notaré q se montó un h1 dentro de el...y todo sin tocar html!!!!

//COMPONENTES: 
//Como regla... UN SOLO COMPONENTE ENGLOBA O CONTIENE A TODOS, ESTE ES EL ROOT COMPONENT!!!
// UN COMPONENTE es básicamente UNA FUNCIÓN q retorna una interfáz!!!
// se RETORNA UNA INTERFAZ....SE RETORNA UNA INTERFAZZZZ!!!!!

function Saludar() {
    return <h1><strong>Hola Juanchotote 2 con función o componente</strong></h1>
}
root.render(Saludar())
// Para INTERPRETAR una FUNCIÓN, dentro de una PORCIÓN de html, ejemplo una función dentro de un div, React dice q tenemos q usar para ello llaves {}

function Saludar2() {
    return <h1>Uso de función dentro de etiquetas html, se usan llaves!!!</h1>
}
root.render(<div>
    {Saludar2()}
    {Saludar2()}
    {Saludar2()}
    {Saludar2()}
    {Saludar2()}
</div>)

//si copio el componente Saludar2 varias veces, se renderizarán varias veces el componente...veremos..
//En general no se llaman así a los componentes, sino q se colocan en etiquetas tipo html, y puede obviarse la etiqueta de apertura.... por ejemplo...

function Saludar3() {
    return <h1>Esto es para probar el llamado de los componentes con forma de etiqueta html (self closing taks: etiquetas q se cierran a sí mismas)</h1>
}

root.render(<div>
    <Saludar3 />
    <Saludar3 />
    <Saludar3 />
    <Saludar3 />
    <Saludar3 />
</div>)

// No solo puedo colocar una sola etiqueta html en un componente sino q puedo colocar varias...

function OtroComponente() {
    return <div>
        <h1>Componente con dos etiquetas</h1>
        <p>Esta es la otra etiqueta p</p>
    </div>
}

root.render(<div>
    <OtroComponente />
    <OtroComponente />
    <OtroComponente />
</div>)

// *******************   JSX    *****************************
//Con jsx puedo combinar codigo js y html por ejemplo sin necesidad de usar los backtics o comillas, para ello hago uso de las ya mencionadas lalves {}...ejemplo..

function JotaSX() {
    const nombre = 'Juanzote'
    return <h1> {nombre} </h1> // con las llaves le digo q react q interprete ese código
}
root.render(<div>
    <JotaSX />
    <JotaSX />
    <JotaSX />
</div>)

//Tb se puede OPERAR DENTRO DE LAS LLAVES... eejmeplo
function JotaSX2() {
    const nombre = 'Juanzote'
    return <h1> {10 + 20} </h1>
}
root.render(<div>
    <JotaSX2 />
</div>)

// ***************   Renderizado de etiquetas CONDICIONAL!!!!!!!!  *****************
function Condicional2() {
    const machote = true;
    /*     if(machote){
            return <h1> Seguro es Juan </h1>
        }else{
            return <h2>Entonces se llama Cristian</h2>
        } */
    //todo el if anterior se puede abreviar con un..........................................
    // NOTAAAA: Si quiero mostrar el valor de machote, o sea de la variable booleana, lo q debo hacer no es solo colocarla entre las llaves, (lo q no mostrará nada), sino q debo usar toString(), o sea sería:
    //              {machote.toString()}

    //**** */ ************************ OPERADOR TERNARIOooooooooo ***********************

    return <h1>{machote ? 'Seguro es Juannnnn 😁' : 'Entonces se llama Cristiannnnn'}</h1>
    //************************************************************************************************ */
}

root.render(<div>
    <Condicional2 />
</div>)

// NOTAAAA: si por ejemplo creo una variable y dentro de ella guardo los atributos como objetos, y pongo para renderizarlo, no voy a poder pq :
// LOS OBJETOS NO SON VALIDOS COMO HIJOS EN REACT, pq en el renderizado creo q siempre se espera una etiqueta, un objeto es un elemento de JS. Para esta conversión uso JSON.stringify()....como se ve... este método, transforma el objeto js en su versión STRING. 

function MostrarObjeto() {
    const datos = {
        nombre:'Juanzote',
        apellido: 'Machote'
    }
    return <h1> {JSON.stringify(datos)} </h1>
}
root.render(<div>
    <MostrarObjeto />
</div>)
// tb puedo representar lo anterior accediendo a los datos del objeto, de la forma clásica...
function MostrarObjeto2() {
    const datos = {
        nombre:'Juanzote',
        apellido: 'Machote'
    }
    return <div>
        <h1> {datos.nombre} </h1>
        <h2> {datos.apellido} </h2>
    </div>
}
root.render(<div>
    <MostrarObjeto2 />
</div>)

// ********************************* ECMASCRIPT MODULES  ********************************************
//No es recomendable llenar de modulos completos el index.js, para lo cual se usan módulos, a los cuales se los importa aquí...

root.render(<div>
    <FunEnFun />
</div>)

//tb puedo crear un componente con dos funciones, a las cuales puedo renderizarlas a las dos, y al importarlas, la importo desde la misma digamos biblioteca, y separo a ambas funciones a renderizar por una coma {Cosa, Otra}ej...../DosModulos
root.render(<div>
    <ModuloUno/>
    <ModuloDos/>
    <ModuloUno/>
    <ModuloUno/>
    <ModuloUno/>

</div>)

// ****************************   PROPS  ************************
// Sirve para CAMBIAR DATOS INTERNAMENTE EN UN COMPONENTE!!!!!!
//si quiero q cada componente tenga alguún dato especial, debo pasarle ese dato de alguna manera, por eso se usan los props... a los cuales se lo pasan como parámetros en las funciones...
root.render(<div>
    <PropsUno/>
    <PropsUno title="Aprendiendo React"/>
    <PropsUno/>
    <PropsUno/>
    <PropsUno/>
</div>)