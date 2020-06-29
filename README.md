# Local Storage Helper

- 🇧🇷 Lide de forma mais segura com o window.localStorage através deste Helper, que aplica algumas validações de objeto e parse de objetos para string (e vice-versa).
- 🇬🇧 Handle window.localStorage more securely through this Helper, which applies some object validations and object parse to string (and vice versa).

---

> 🇧🇷 Como usar | 🇬🇧 How to use

```javascript
const { create, update, remove, read, clear } = require('localstorage-helper')

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

> BONUS

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

- ![Imagem de demonstração/Demo image](https://github.com/ipetinate/localstorage-helper/blob/master/docs/img/Screenshot%20from%202020-06-29%2003-49-11.png)

---

> 🇧🇷 Detalhes | 🇬🇧 Details

- 🇧🇷 Por baixo dos panos ao criar ou atualizar um item, se for um objeto ele irá serializar para string, assim não corremos o risco de perder os dados ou corrompe-los, e na hora de recuperar com o read ele irá desserializar para que você tenha seu objeto intacto.
- 🇬🇧 Under the hood when creating or updating an item, if it is an object it will serialize to string, so we don't run the risk of losing data or corrupting it, and when recovering with read it will deserialize for you to have your object intact.
