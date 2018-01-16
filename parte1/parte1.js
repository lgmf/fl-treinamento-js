//Diferença entre 'let', 'var'

// for (var i = 0; i < 5; i++) { /* do something */ }
// for (let j = 0; j < 5; j++) { /* do something else */}

// console.log(i); // 5
// console.log(j); // Uncaught ReferenceError: j is not defined


//---------------------------------------------------------------------------------------------------//
//Diferença entre 'let', 'const'

// let a = 1
// a = 2

// const b = 1
// b = 2 // Uncaught SyntaxError "b" is read-only


//---------------------------------------------------------------------------------------------------//
//Importância dos 3 iguais

// console.log({ doubleEqual: 1 == '1'}) // true
// console.log({ tripleEqual: 1 === '1'})  // false


//---------------------------------------------------------------------------------------------------//
//Métodos da classe String

// const myName = 'Luiz Guilherme'
// console.log(myName.length)
// console.log(myName.includes('l'))
// console.log(myName.split(' '))

// const myLastName = "Mendes Ferrari"
// console.log(myLastName)
// console.log({ myLastName })


//---------------------------------------------------------------------------------------------------//
//Numbers

// const n = 1

// const sum = 1 + '1'
// console.log({
//     type: typeof(sum),
//     sum
// })

// const sub = 1 - '1'
// console.log({
//     type: typeof(sub),
//     sub
// })

// let a = 1.234
// let b = 2

// console.log({
//     type: typeof(a),
//     a
// })

// console.log({
//     type: typeof(b),
//     b
// })

//---------------------------------------------------------------------------------------------------//
//Booleans

// const x = true
// const y = false
//OU
// const [x, y] = [true, false]

// console.log({ x, y })

// let myObj = null
// console.log((myObj) ? 'Esse objeto NÃO é nulo' : 'Esse objeto é nulo') // NULO

// myObj = undefined
// console.log((myObj) ? 'Esse objeto NÃO é nulo' : 'Esse objeto é nulo') // NULO

// myObj = { name: 'Luiz Guilherme ', lastName: 'Mendes Ferrari' }
// console.log((myObj) ? 'Esse objeto NÃO é nulo' : 'Esse objeto é nulo') // NÃO NULO


//---------------------------------------------------------------------------------------------------//
//Global Functions

// const n = 1

// const sum = 1 + parseInt('1')
// console.log({
//     type: typeof (sum),
//     sum
// })

// const div = 10
// console.log({ result: eval(` ( 4 * 5 + 80 ) / ${div}`) }) // 10

// console.table([
//     typeof ('Luiz'),
//     typeof (1),
//     typeof ({ id: 1, name: 'Luiz' })
// ])


//---------------------------------------------------------------------------------------------------//
//Funções

// function div(a, b) {
//     if (b === 0) return 'ERRO --> Parâmetro "b" não pode ser zero'//     
//     return a / b;
// }

// //OU

// let div = (a, b) => (b === 0) ? 'ERRO --> Parâmetro "b" não pode ser zero' :  a / b 

// console.log( div(10, 0) )

// console.log( div(10, 2) )

//---------------------------------------------------------------------------------------------------//
//Seletores

//OBS.: Descomentar o H4 no HTML

// let myH4 = document.getElementById('my-h4')
// myH4.innerText = 'Clique aqui...'
// myH4.style.border = '5px solid black'
// myH4.style.cursor = 'pointer'
// myH4.style.padding = '0.5em 0.5em'

// function handlerClick(event) {
//     //debugger
//     if (event.target.style.backgroundColor === 'blue') {
//         event.target.style.backgroundColor = 'white'
//         event.target.style.color = 'black'
//         event.target.innerText = 'Clique aqui...'
//         return true;
//     }

//     event.target.style.backgroundColor = 'blue'
//     event.target.style.color = 'white'
//     event.target.innerText = 'Clicado!'
// }
// myH4.addEventListener('click', handlerClick)
//OU
// myH4.addEventListener('click', (event) => {
//     // debugger
//     event.target.style.backgroundColor = 'blue';
//     event.target.style.color = 'white';
// })

//---------------------------------------------------------------------------------------------------//   

//OBS.: Descomentar o botão no HTML

// let myButton = document.querySelector('.my-button')

//OU

// let myButton = document.querySelector('button') 

//OU

// let myButton = document.getElementsByTagName('button')[0]

//OU

// let myButton = document.getElementsByClassName('my-button')[0]

// myButton.addEventListener('click', (event) => {        
//     // debugger
//     console.log({ 
//         text: event.target.innerText, 
//         value: event.srcElement.dataset.value
//     })
// })

//---------------------------------------------------------------------------------------------------//

//OBS.: Descomentar os 'p' no HTML

// let myParagraphs = document.querySelectorAll('p')
// console.log(myParagraphs)

// let arr = Array.from(myParagraphs)
//OU
// let arr = [...myParagraphs]
// console.log(arr)

// myParagraphs
//     .forEach((p) => {
//         p.addEventListener('mouseenter', (event) => event.srcElement.style.backgroundColor = 'yellow')
//         p.addEventListener('mouseleave', (event) => event.srcElement.style.backgroundColor = 'white')
//     })

// arr
//     .forEach((p) => {
//         p.addEventListener('mouseenter', (event) => event.srcElement.style.backgroundColor = 'yellow')
//         p.addEventListener('mouseleave', (event) => event.srcElement.style.backgroundColor = 'white')
//     })

//---------------------------------------------------------------------------------------------------//
//Spread Operator

// let arr = [1,2,3,4,5]
// let arr1 = [6,7,8] 
// arr.push(arr1)
// arr.push(...arr1)
// console.log(arr)

//Bug com nested objects
// let obj = {
//     name: 'Luiz',
//     type: {
//         name: 'obj',
//         color: 'red'
//     }
// }

// console.log({ obj })

// let objAux = {
//     ...obj
// }

// console.log({ objAux })

