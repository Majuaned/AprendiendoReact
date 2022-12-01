export function FunEnFun() {
    function Sumar(x,y) {
        return x+y //esta línea de la función es lo q hace la función
    }
    return <h1>{Sumar(10,60)}</h1>
}

//la función debe ir precedida de la palabra reservada export, para exportar la misma donde se necesite...luego importo por ejemplo en el index.js