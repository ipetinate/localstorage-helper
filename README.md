# Local Storage Helper


> NPM: https://www.npmjs.com/package/localstorage-helpr


- 🇧🇷 Lide de forma mais segura com o window.localStorage através deste Helper, que aplica algumas validações de objeto e parse de objetos para string (e vice-versa).
- 🇬🇧 Handle window.localStorage more securely through this Helper, which applies some object validations and object parse to string (and vice versa).

- [GitHub](https://github.com/ipetinate/localstorage-helper)
- [Stackblitz - Live Demo [JS vanilla]](https://stackblitz.com/edit/localstorage-helpr)
- [Stackblitz - Live Demo [React Web]](https://stackblitz.com/edit/localstorage-helpr-react)

---

> 🇧🇷 Como usar | 🇬🇧 How to use

- 🇧🇷 Rode ``npm i --save localstorage-helpr`` ou ``yarn add localstorage-helpr``


- 🇬🇧 Run ``npm i --save localstorage-helpr`` or ``yarn add localstorage-helpr``

```javascript
const { create, update, remove, read, clear } = require('localstorage-helpr')

const KEY = 'CHAVE'
const VALUE = 'VALOR'

// 🇧🇷 Cria um item no LocalStorage | 🇬🇧 Creates an item in LocalStorage
create(KEY, VALUE)

// 🇧🇷 Atualiza um item no LocalStorage | 🇬🇧 Updates an item in LocalStorage
update(KEY, VALUE)

// 🇧🇷 Remove um item no LocalStorage | 🇬🇧 Removes an item in LocalStorage
remove(KEY, VALUE)

// 🇧🇷 Lê o valor de um item no LocalStorage | 🇬🇧 Reads the value of an item in LocalStorage
read(KEY)

// 🇧🇷 Limpa o LocalStorage | 🇬🇧 Clean LocalStorage
clear()

// -----------------------------------------------------

// > BONUS

// 🇧🇷 Você tem acesso aos métodos usados internamente para manipular os dados
// 🇬🇧 You have access to the methods used internally to manipulate the data

const { isObject, objectDeserialize, objectSerialize, } = require('localstorage-helper')

let obj = { a: 1, b: 2 }
let arrayIsObj = [ 1, 3, 5, 7, 9]
let number = 33

isObject(obj) // true
isObject(number) // false
isObject(arrayIsObj) // true

objectSerialize(obj) // "{"a":1,"b":2}"
objectSerialize(arrayIsObj) // "[ 1, 3, 5, 7, 9]"

objectDeserialize(obj) // { a: 1, b: 2 }
objectDeserialize(arrayIsObj) // [ 1, 3, 5, 7, 9]

```

- ![Imagem de demonstração/Demo image](https://github.com/ipetinate/localstorage-helper/blob/master/docs/img/example.png)

---

> 🇧🇷 Detalhes | 🇬🇧 Details

- 🇧🇷 Por baixo dos panos ao criar ou atualizar um item, se for um objeto ele irá serializar para string, assim não corremos o risco de perder os dados ou corrompe-los, e na hora de recuperar com o read ele irá desserializar para que você tenha seu objeto intacto.
- 🇬🇧 Under the hood when creating or updating an item, if it is an object it will serialize to string, so we don't run the risk of losing data or corrupting it, and when recovering with read it will deserialize for you to have your object intact.

- 🇧🇷 Caso sinta necessidade de entender melhor sobre os métodos, [você pode conferir os testes de unidade aqui](https://github.com/ipetinate/localstorage-helper/tree/master/src) dentro de cada pasta tem seu respectivo arquivo de teste.
- 🇬🇧 If you feel the need to better understand the methods, [you can check the unit tests here](https://github.com/ipetinate/localstorage-helper/tree/master/src) inside each folder has its respective test file.
