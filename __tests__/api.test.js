/**
 * @jest-environment node
 */

import Axios from 'axios';

describe("la api funciona tal y como deveria", () => {

    it('la api devuelve un json con una propiedad number', async () => {
        await Axios.get("http://localhost:3000/api/3")
        .then(res => {
            expect(res.data).toHaveProperty("number")
        })
    })

    it('la propiedad number tiene el valor introducido en la url', async () => {
        let n = 55
        await Axios.get(`http://localhost:3000/api/${n}`)
            .then(res => {
                expect(res.data.number).toBe(n)
            })
    })

    it('la api devuelve un json con una propiedad process', async () => {
        await Axios.get("http://localhost:3000/api/3")
        .then(res => {
            expect(res.data).toHaveProperty("process")
        })
    })

    it('la propiedad process contiene un objeto', async () => {
        await Axios.get("http://localhost:3000/api/3")
        .then(res => {
            expect(typeof res.data.process).toBe("object")
        })
    })

    it('la propiedad process contiene un objeto con la propiedad iterations', async () => {
        await Axios.get("http://localhost:3000/api/3")
        .then(res => {
            expect(res.data.process).toHaveProperty("iterations")
        })
    })

    it('la propiedad process.iterations debe ser un numero', async () => {
        await Axios.get("http://localhost:3000/api/3")
        .then(res => {
            expect(typeof res.data.process.iterations).toBe("number")
        })
    })

    it('la propiedad iterations debe representar el numero de iteraciones de nuestra busqueda', async () => {
        await Axios.get("http://localhost:3000/api/3")
        .then(res => {
            expect(res.data.process.iterations).toBe(32)
        })
        await Axios.get("http://localhost:3000/api/55")
        .then(res => {
            expect(res.data.process.iterations).toBe(34)
        })
    })
    
    it('la propiedad process contiene un objeto con la propiedad steps', async () => {
        await Axios.get("http://localhost:3000/api/3")
        .then(res => {
            expect(res.data.process).toHaveProperty("steps")
        })
    })

    it('la propiedad process.steps debe ser un array', async () => {
        await Axios.get("http://localhost:3000/api/3")
        .then(res => {
            expect(Array.isArray(res.data.process.steps)).toBe(true)
        })
    })

    it('steps debe tener tantos elementos como iteraciones nuestra busqueda', async () => {
        await Axios.get("http://localhost:3000/api/3")
        .then(res => {
            expect(res.data.process.steps.length).toBe(32)
        })
        await Axios.get("http://localhost:3000/api/55")
        .then(res => {
            expect(res.data.process.steps.length).toBe(34)
        })
    })
})