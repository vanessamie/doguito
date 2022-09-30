

JS na web: CRUD com JavaScript assíncrono
JavaScript na Web: validação de Formulários e HTML5



https://vanessamie.github.io/doguito/



Fazer requisições utilizando XMLHttpRequest.
Lidar com promises.
Fazer uma requisição http utilizando XMLHttpRequest para buscar todos os clientes do servidor.
Refatorar o código utilizando promises melhorando a leitura do código.
Utilizar template literals para criar um template html.
Entender a ordem de execução do código JavaScript.
Puxar dados do servidor utilizando a função a fetch api ao invés do xmlhttprequest para modernizar o código.
Refatorar as responsabilidades do código pensando na manutenção da aplicação no futuro.
Usar a método closest para encontrar o elemento do DOM mais próximo ao que queremos remover
Criar um cliente utilizando o verbo http POST.
Remover um elemento do dom com método remove()
Deletar um cliente utilizando o verbo http DELETE
Fazer uma query string utilizando a propriedade searchParams.get() para encontrar um id.
Criar uma IIFE ou função auto executável.
Editar os dados utilizando o verbo http PUT.
Utilizar async/await para indicar funções assíncronas.
Tratar erros com try/catch

Fazer validações no próprio HTML utilizando os atributos required e type.

Usar regras de regex dentro do atributo pattern para validar o campo de senha.

Mandar uma mensagem customizada de erro no balão do navegador.


abrir a pasta admin no vscode e 
rodar o json server: 
```js
 npx json-server --watch db.json
```

instalar
```js
npm install -g browser-sync
```

Rodar: 
```js
browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html
```



Começando com fetch no Javascript
https://www.alura.com.br/artigos/comecando-com-fetch-no-javascript


Time-saving synchronised browser testing.
https://browsersync.io/


Site usado para simular o funcionamento do ambiente JavaScript.

http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D


Site do Globo Esporte de 2006 mostrado na aula

https://web.archive.org/web/20060516060134/http://globoesporte.globo.com/


Validador de regex
https://regexr.com/

Veja também a Regex Engine que utilizei e os regex que desenvolvi durante o curso
https://github.com/vanessamie/regex


title="A senha deve conter de 6 a 12 caracteres, pelo menos 1 letra maiúscula e 1 número e não deve conter símbolos"
```js
pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$" 
```