# Propuesta desafío M2
En este desafió vamos a aplicar lo visto en React hasta ahora en el modulo 2! Nota, esto no es obligatorio, es a voluntad.
Al terminar el proyecto suban un video o imagen al canal de slack y el que tenga mas reacciones, lo deployamos el miércoles a la tarde!
Prueben utilizar postman o insomnia para ver que data les trae una API.
Ciertas APIs les van a pedir autenticación, se van a tener que registrar y enviar la API key como diga su documentación.

###  Idea
Tomar una API gratuita y crear, por lo menos, 3 pantallas.
- Una pantalla de home, donde se tendría que haber una presentación y un link hacia la pagina principal.
- Una pagina principal, donde mostrarías tarjetas de, por ejemplo, personajes si tu API tiene algo así. Podrías implementar un buscador también
- Una pagina de detalle, que se entraría al hacer clic en una de las tarjetas de la pagina principal.

Pista: Si usan hooks, van a querer buscar el hook useEffect.
Para comenzar usen este comando
```npx create-react-app nombre-de-tu-app```  
Pueden usar cualquier API, pero acá les dejo un par para que revisen.

### Rick y morty
No necesitas una APY key con esta! Solo haces el fetch como hicimos en las 
https://rickandmortyapi.com/documentation
```
Hay un ejemplo de como hacer esto en alguno de los code reviews, pero aca te dejo un ejemplo:

fetch('https://rickandmortyapi.com/api/character/')
.then(response =>  response.json())
.then(data => console.log(data))

```

### API Movies

http://www.omdbapi.com/
Ejemplo:
```
fetch('http://www.omdbapi.com/?apikey=ACA_SU_API_KEY&s=batman')
.then(response => response.json())
.then(data => console.log(data))
```
### API del señor de los anillos.
Esta api requiere authenticacion, deje un ejemplo abajo de como adjuntar la API key.
https://the-one-api.dev/documentation

Ejemplo del uso del fetch
```
const headers = {
'Accept': 'application/json',
'Authorization': 'Bearer tuapikey'
}
const fetchData = async () => {

const rawQuotes = await fetch('https://the-one-api.dev/v2/quote', {
headers: headers
}).then((response) => response.json()).then((info) => console.log(info))
}
```
### Covid19 API
https://covid19api.com/
### Star Wars API

https://swapi.dev/documentation

Esas son las que conozco, sus compañeros les dejaron algunas mas en este hilo de slack:
https://soyhenry.slack.com/archives/C01SDM7SNN5/p1625250547141700
Utilicen la que les guste mas!
Recuerden que es solo  un ejercicio opcional y para divertirse!
