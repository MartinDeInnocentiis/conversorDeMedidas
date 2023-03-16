/*
-------------------------------------------
ENTREGA 02: Conversor de Unidades de Medida
           Martin De Innocentiis           
-------------------------------------------
*/


//FUNCION DE INICIO DEL PROGRAMA//
function bienvenida() {
    const mensaje = "Bienvenido a la aplicación de conversión de medidas. ¿Qué desea hacer?\n 1. Ver las opciones.\n 2. Salir.";
    let opcion = prompt(mensaje);
    if (opcion === "1") {
        mostrarOpciones();
    } else if (opcion === "2") {
        alert("Gracias y vuelva pronto :)");
    } else {
        alert("No es muy dificil. Tenes que ingresar 1 o 2...");
        bienvenida(); //CONTROLO LA EXCEPCION Y VUELVO A LLAMAR A LA FUNCION
    }
}


//FUNCION DE VALIDACION GENERICA DE ENTRADA DE DATOS 
function validarNumero(valor) {
    if (isNaN(parseInt(valor))) {
        alert("Debe ingresar un número válido");
        return false;
    }
    return true;
}


//CREO UN ARRAY VACIO, AL QUE SE ALMACENARA EL RESULTADO DE CADA CONVERSION ELEGIDA, PARA LUEGO MOSTRAR TODOS LOS RESULTADOS REQUERIDOS.
let resultados= []


//CREO UN OBJETO PARA CADA UNIDAD DE MEDIDA, y AGRUPO DENTRO DE ELLOS SUS RESPECTIVAS FUNCIONES DE CONVERSION

//OBJETO LIBRAS//
const libras = {
    nombre: "libras",
    aKilos() {
        let valor = prompt("Convertir Libras a Kilos.\nIngrese el valor en libras que desea convertir: ");
        if (validarNumero(valor)) {
            let kilosL = valor * 0.45359237;
            resultados.push("\n - "+kilosL+" kilos");
            alert(valor + " libras, equivalen a " + kilosL.toFixed(2) + " kilos.");
        }
    },
    aOnzas() {
        let valor = prompt("Convertir Libras a Onzas.\nIngrese el valor en libras que desea convertir: ");
        if (validarNumero(valor)) {
            let onzasL = valor * 16;
            resultados.push("\n - "+onzasL+" onzas");
            alert(valor + " libras, equivalen a " + onzasL.toFixed(2) + " onzas.");
        }
    }
}

//OBJETO KILOS//
const kilos = {
    nombre: "kilos",
    aLibras() {
        let valor = prompt("Convertir Kilos a Libras.\nIngrese el valor en kilos que desea convertir: ");
        if (validarNumero(valor)) {
            let librasK = valor * 2.20462;
            resultados.push("\n - "+librasK+" libras");
            alert(valor + " kilos, equivalen a " + librasK.toFixed(2) + " libras.");
        }
    },
    aOnzas() {
        let valor = prompt("Convertir Kilos a Onzas.\nIngrese el valor en kilos que desea convertir: ");
        if (validarNumero(valor)) {
            let onzasK = valor * 35.274;
            resultados.push ("\n - "+onzasK+" onzas");
            alert(valor + " kilos, equivalen a " + onzasK.toFixed(2) + " onzas.");
        }
    },
    aGramos() {
        let valor = prompt("Convertir Kilos a Gramos.\nIngrese el valor en kilos que desea convertir: ");
        if (validarNumero(valor)) {
            let gramosK = valor * 1000;
            resultados.push("\n - "+gramosK+" gramos");
            alert(valor + " kilos, equivalen a " + gramosK.toFixed(2) + " gramos.");
        }
    }
}

//OBJETO ONZAS//
const onzas = {
    nombre: "onzas",
    aKilos() {
        let valor = prompt("Convertir Onzas a Kilos.\nIngrese el valor en onzas que desea convertir: ");
        if (validarNumero(valor)) {
            let kilosO = valor / 35.274;
            resultados.push("\n - "+kilosO +" kilos");
            alert(valor + " onzas, equivalen a " + kilosO.toFixed(2) + " kilos.");
        }
    },
    aLibras() {
        let valor = prompt("Convertir Onzas a Libras.\nIngrese el valor en onzas que desea convertir: ");
        if (validarNumero(valor)) {
            let librasO = valor / 16;
            resultados.push("\n - "+librasO+" libras");
            alert(valor + " onzas, equivalen a " + librasO.toFixed(2) + " libras.");
        }
    }
}

//OBJETO GRAMOS//
const gramos = {
    nombre: "gramos",
    aKilos() {
        let valor = prompt("Convertir Gramos a Kilos.\nIngrese el valor en gramos que desea convertir: ");
        if (validarNumero(valor)) {
            let kilosG = valor / 1000;
            resultados.push("\n - "+kilosG+" kilos");
            alert(valor + " gramos, equivalen a " + kilosG.toFixed(2) + " kilos.");
        }
    }
}


//FUNCION MENU DE OPCIONES//
function mostrarOpciones() {
    let continuar = true;
    const menu = "Seleccione la conversión que desea realizar:\n 1. Libras a Kilos\n 2. Kilos a Libras\n 3. Libras a Onzas\n 4. Onzas a Libras\n 5. Onzas a Kilos\n 6. Kilos a Onzas\n 7. Kilos a Gramos\n 8. Gramos a Kilos\n 9. No quiero hacer nada";
    let opcion2 = prompt(menu);

    while (continuar) {
        switch (opcion2) { //UTILIZO ESCTRUCTURA DE CONTROL DE FLUJOS. SEGUN ELIJA EL USUARIO, EJECUTO EL METODO DE CADA OJETO 
            case "1":
                libras.aKilos();
                break;
            case "2":
                kilos.aLibras();
                break;
            case "3":
                libras.aOnzas();
                break;
            case "4":
                onzas.aLibras();
                break;
            case "5":
                onzas.aKilos();
                break;
            case "6":
                kilos.aOnzas();
                break;
            case "7":
                kilos.aGramos();
                break;
            case "8":
                gramos.aKilos();
                break;
            case "9":
                continuar = false; //SALIDA. CONTINUAR = FALSE INTERRUMPE LA EJECUCIÓN DEL CICLO
                break;
            default:
                alert("Opción no válida. Seleccionar una opción del 1 al 9."); //CONTROLO LA EXCEPCIÓN EN CASO DE NO INGRESAR UN NUMERO DEL 1 AL 9
                break;
        }
        if (continuar === true) {
            continuar = confirm("¿Desea continuar?");
            if (continuar === true) {
                opcion2 = prompt(menu); //VUELVO A ENTRAR AL CICLO Y DESPLIEGO EL MENU
            }
        }
    }
    alert("Estas son tus medidas requeridas: \n" + resultados); //DEVUELVO EL ARRAY CON LA TOTALIDAD DE LAS CONVERSIONES REQUERIDAS POR EL USUARIO.
    alert("Gracias por utilizar esta aplicación!");
}


/*SE CREA FUNCION MAIN PARA ESTRUCTURAR Y ORDENAR LA EJECUCION DEL CODIGO.
MAIN LLAMA A LA FUNCIÓN BIENVENIDA, QUE A SU VEZ ESTA LLAMA A LA FUNCION MOSTRAR OPCIONES*/
function main() {
    bienvenida();
}


//SE LLAMA A LA FUNCION MAIN, QUE EJECUTA TODO EL PROGRAMA.//
main();
