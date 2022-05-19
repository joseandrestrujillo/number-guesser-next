function busquedaBinaria (a, b, n, iter, steps) {
  let m = Math.floor((a + b) / 2);

  iter[0] = iter[0] + 1;
  steps.push(m)  
  if(m == n)  return m;
  if(m < n) return busquedaBinaria(m, b, n, iter, steps);
  if(m > n) return busquedaBinaria(a, m, n, iter, steps);
}

export default function handler(req, res) {
    const number = req.query.number;
    let iter = [0];  
    let steps = [];
    let guessNumber = busquedaBinaria(1, 10000000001, number, iter, steps);
    let guessProcess = new Object;
    guessProcess.iterations = iter[0];
    guessProcess.steps = steps;
    res.json({ 
      number: guessNumber,
      process: guessProcess
    })
  }
  