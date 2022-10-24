
//Voy a montar un entorno simple de Express.

const express = require('express');

const app = express();

const port = 3000;


//Middlewares

//En este caso estoy indicando a mi aplicación que pueda trabajar con el formato JSON.
app.use(express.json());

//Endpoints



app.get("/", (req,res) => {
    res.send("Bienvenido a mi API");
});

/*
    El endpoint en este caso entraría en la direccion localhost:3000/valorVariable,
    en este caso, estoy pasando un argumento por la URL, con el método GET. 

    Recordamos que en el método Get siempre se pasan los argumentos por la URL como
    parámetros.
*/
app.get('/saludo/:nombre', (req, res) => {

    let nombre = req.params.nombre;

    res.send(`Hola, ${nombre} bienvenido a mi super API`);
});

app.get('/login', (req, res) => {

    // res.send("Ahora estás en LOGIN");

    res.json(
        {
            "mensaje" : "Bienvenido, gracias por logearte"
        }
    )
});

app.post('/register', (req, res) => {

    //Obtengo los datos del body, del request, es decir, de la petición.

    let usuario = req.body;

    res.send(`Hola ${usuario.nombre}, se que tu email es${usuario.email} y tienes ${usuario.edad} años`);

});


//Levantamos el servidor en escucha, en el puerto que hemos escogido previamente.

app.listen(port, () => console.log(`Servidor levantado en puerto...${port}`));


