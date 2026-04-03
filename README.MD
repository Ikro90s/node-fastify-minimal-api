# Node Fastify Minimal API

<div align="center">
  <img src="./.github/assets/blue-saiyan-bg.png" alt="Banner do projeto" height="180" />
  <h3>API minimalista com Fastify + TypeScript, organizada por camadas</h3>
  <p>
    Projeto de estudo com foco em arquitetura limpa para APIs pequenas e médias,<br />
    separando responsabilidades em <b>routes</b>, <b>controllers</b>, <b>services</b>, <b>data</b>, <b>interfaces</b> e <b>utils</b>.
  </p>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-20%2B-1f6feb" alt="Node 20+" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178c6" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Fastify-5.x-000000" alt="Fastify 5" />
</p>

---

## Visao geral

<table>
  <tr>
    <td><b>Objetivo</b></td>
    <td>Expor endpoints REST simples com estrutura escalavel e facil manutencao</td>
  </tr>
  <tr>
    <td><b>Stack</b></td>
    <td>Node.js, TypeScript, Fastify, @fastify/cors</td>
  </tr>
  <tr>
    <td><b>Porta padrao</b></td>
    <td>3333 (configuravel por variavel de ambiente <code>PORT</code>)</td>
  </tr>
</table>

## Fluxo da requisicao

<pre>
Client HTTP
   |
   v
Routes -> Controllers -> Services -> Data
                     |
                     v
                Reply (JSON)
</pre>

## Estrutura de pastas

```text
src/
  app.ts
  server.ts
  config/
    env.ts
  plugins/
    cors.ts
  routes/
    index.ts
    team-routes.ts
    driver-routes.ts
  controllers/
    team-controller.ts
    driver-controller.ts
  services/
    team-service.ts
    driver-service.ts
  data/
    teams.ts
    drivers.ts
  interfaces/
    team.ts
    driver.ts
    http.ts
  utils/
    parse-id.ts
```

### Responsabilidade de cada camada

<ul>
  <li><b>server.ts</b>: ponto de entrada e inicializacao do servidor.</li>
  <li><b>app.ts</b>: cria a instancia Fastify e registra plugins/rotas.</li>
  <li><b>config</b>: centraliza variaveis de ambiente e configuracoes.</li>
  <li><b>plugins</b>: componentes reutilizaveis do Fastify (ex: CORS).</li>
  <li><b>routes</b>: define endpoints e conecta com controllers.</li>
  <li><b>controllers</b>: recebe request, chama service e retorna response.</li>
  <li><b>services</b>: concentra regra de negocio e consulta dados.</li>
  <li><b>data</b>: fonte de dados mockada/local.</li>
  <li><b>interfaces</b>: contratos e tipagens da aplicacao.</li>
  <li><b>utils</b>: funcoes utilitarias reutilizaveis.</li>
</ul>

## Endpoints

<table>
  <thead>
    <tr>
      <th>Metodo</th>
      <th>Rota</th>
      <th>Descricao</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>GET</code></td>
      <td><code>/teams</code></td>
      <td>Lista todas as equipes</td>
    </tr>
    <tr>
      <td><code>GET</code></td>
      <td><code>/drivers</code></td>
      <td>Lista todos os pilotos</td>
    </tr>
    <tr>
      <td><code>GET</code></td>
      <td><code>/drivers/:id</code></td>
      <td>Busca piloto por ID (retorna 404 se nao encontrado)</td>
    </tr>
  </tbody>
</table>

### Exemplo rapido com curl

```bash
curl -X GET http://localhost:3333/teams
curl -X GET http://localhost:3333/drivers
curl -X GET http://localhost:3333/drivers/1
```

## Como executar

### Requisitos

<ul>
  <li>Node.js 20+</li>
  <li>pnpm (recomendado) ou npm</li>
</ul>

### Instalacao

```bash
pnpm install
```

### Scripts

<table>
  <thead>
    <tr>
      <th>Comando</th>
      <th>Funcao</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>pnpm run start:dev</code></td>
      <td>Executa API em desenvolvimento</td>
    </tr>
    <tr>
      <td><code>pnpm run start:watch</code></td>
      <td>Executa em watch mode com reload automatico</td>
    </tr>
    <tr>
      <td><code>pnpm run dist</code></td>
      <td>Gera build na pasta <code>dist</code></td>
    </tr>
    <tr>
      <td><code>pnpm run start:dist</code></td>
      <td>Compila e inicia versao de distribuicao</td>
    </tr>
  </tbody>
</table>

## Tecnologias

<ul>
  <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
  <li><a href="https://www.npmjs.com/package/tsx">tsx</a></li>
  <li><a href="https://www.npmjs.com/package/tsup">tsup</a></li>
  <li><a href="https://www.npmjs.com/package/fastify">fastify</a></li>
  <li><a href="https://www.npmjs.com/package/@fastify/cors">@fastify/cors</a></li>
</ul>

## Autor

<p>
  Baseado no boilerplate de
  <a href="https://github.com/felipeAguiarCode">Felipe Aguiar</a>.
</p>
