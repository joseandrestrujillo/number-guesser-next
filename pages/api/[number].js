/*
  La nomenclatura [number].js se utiliza para que, en el endpoint .../api/[number], el
  numero escrito sea pasado como valor en la peticion (req.query.number)
    .../api/1  -->  req.query.number = 1
    .../api/3  -->  req.query.number = 3
    .../api/1000  -->  req.query.number = 1000

*/

function busquedaBinaria (a, b, n, iter, steps) {
  let m = Math.floor((a + b) / 2);

  iter[0] = iter[0] + 1;
  steps.push(m)  
  if(m == n)  return m;
  if(m < n) return busquedaBinaria(m, b, n, iter, steps);
  if(m > n) return busquedaBinaria(a, m, n, iter, steps);
}

// Esta es la función que manejará el funcionamiento de la API
export default function handler(req, res) {
    const number = req.query.number;
    let iter = [0];  
    let steps = [];
    let guessNumber = busquedaBinaria(1, 10000000001, number, iter, steps);
    //Creamos el objeto process y lo incializamos
      let guessProcess = new Object;
      guessProcess.iterations = iter[0];
      guessProcess.steps = steps;
    // Devolvemos el json con el formato deseado
    res.json({ 
      number: guessNumber,
      process: guessProcess
    })
  }
  