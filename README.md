```markdown
# QA_Proj_Cypress_Nop_Commerce

- Para clonar e rodar localmente a automação, siga estas etapas:

   1. Com o Git instalado e o terminal Git Bash aberto, insira o seguinte comando para clonar o repositório:
   
      ```
      git clone https://github.com/brunogsiq/QA_Proj_Cypress_Nop_Commerce.git
      ```

   2. Com o Node.js instalado em sua máquina, é hora de instalar o Cypress.

      - Caso haja a necessidade de instalar o Node.js, faça o seguinte:
        Acesse o site do [NodeJS](https://nodejs.org/) e baixe a versão LTS (Long Term Support).

   3. Abra o Visual Studio Code (vsCode) e, dentro da raiz do projeto, abra o terminal.

      - Caso haja a necessidade de instalar o Visual Studio Code, faça o seguinte:
        Acesse o site do [Visual Studio Code](https://code.visualstudio.com/).

   4. Execute os seguintes comandos para instalar o Cypress:

      ```
      npm install cypress --save --include=dev

      npm i cypress --save
      ```

- Para rodar os testes usando a interface gráfica do Cypress, utilize o seguinte comando:
   
      ```
      npx cypress open  // Interface gráfica
      ```

   ou

      ```
      npx cypress run  // Localmente pelo terminal
      ```

**Instalando Dependências necessárias para utilização no projeto**

1. Geração de relatório:

   - Instale a dependência através do comando:

      ```
      npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
      ```

   - Local de configuração inicial será em `cypress.config.js`

   - Após, adicione as seguintes linhas no arquivo de configuração:

      ```javascript
      module.exports = defineConfig({
        reporter: "mochawesome",
        reporterOptions: {
          reportDir: 'cypress/report',
          overwrite: true,
          html: true,
          json: false,
          timestamp: 'dd-mm-yyyy_HH-MM-ss',
          overwrite: false,
        },
        e2e: {
          // ...
        }
      });
      ```

   - No arquivo `package.json`, adicione a seguinte linha:

      ```json
      "scripts": {
        "test": "cypress run --reporter mochawesome",
        "merge-reports": "mochawesome-merge --reportDir cypress/reports/mocha > cypress/reports/mochawesome-merged.json",
        "generate-report": "marge cypress/reports/mochawesome-merged.json -f report -o cypress/reports",
        "cy:run": "npm run test && npm run merge-reports && npm run generate-report"
      }
      ```

   - Após toda instalação realizada, o Cypress deverá ser executado localmente. Para isso, basta executar o comando: 

      ```
      npx cypress run
      ```

2. `waitUntil`

   - Instalação e como usar: [cypress-wait-until](https://www.npmjs.com/package/cypress-wait-until)

      ```
      npm install -D cypress-wait-until
      ```

   - Após:

      Adicione esta linha ao arquivo `commands.js` em `cypress/support/commands.js`:

      ```javascript
      import 'cypress-wait-until';
      ```

      E adicione em `e2e.js` dentro de `cypress/support/e2e`:

      ```javascript
      require('cypress-wait-until');
      ```

      Exemplos:

      ```javascript
      // Aguarde até que um cookie seja definido
      cy.waitUntil(() => cy.getCookie('token').then(cookie => Boolean(cookie && cookie.value)));
      });
      ```

3. `Faker`

   ```
   npm install @faker-js/faker --save-dev
   ```

   Agora, vamos ver alguns exemplos de como utilizar o Faker.js em diferentes ambientes:

   ## Exemplos de Uso

   Dentro do arquivo de teste ou função onde será necessário utilizar o Faker, insira o seguinte código:

   ```javascript
   import { faker } from '@faker-js/faker';

   const randomName = faker.name.fullName(); // Exemplo: Rowan Nikolaus
   const randomEmail = faker.internet.email(); // Exemplo: Kassandra.Haley@erich.biz
   ```

   ### Exemplo com CommonJS

   Se estiver utilizando CommonJS, utilize o seguinte código:

   ```javascript
   const { faker } = require('@faker-js/faker');

   const randomName = faker.name.fullName(); // Exemplo: Rowan Nikolaus
   const randomEmail = faker.internet.email(); // Exemplo: Kassandra.Haley@erich.biz
   ```

   ### Exemplo para Browser

   Para utilizar o Faker.js diretamente no navegador, utilize o seguinte código dentro de um script HTML:

   ```html
   <script type="module">
   import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

   const randomName = faker.name.fullName(); // Exemplo: Caitlyn Kerluke
   const randomEmail = faker.internet.email(); // Exemplo: Rusty@arne.info
   </script>
   ```

   Lembre-se de substituir os exemplos de `randomName` e `randomEmail` pelos dados gerados pelo Faker.js de acordo com suas necessidades.

   Para mais informações e detalhes sobre o Faker.js, consulte a [documentação oficial](https://fakerjs.dev/guide/).
   ```

   Este texto fornece instruções claras sobre como instalar o Faker.js, exemplos de uso em diferentes ambientes e um link para a documentação oficial para mais detalhes.
```