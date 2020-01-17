# Projeto de Onboard de Felipe Shiraishi

## Descrição do projeto

Este é o projeto de onboarding de Felipe Shiraishi na Taqtile.

Se trata de uma aplicação mobile simples para aprender o básico da stack que usará para desenvolver os seus projetos dentro da taqtile.

## Ambiente e Ferramentas

O projeto é desenvolvido em um MAC utilizando a seguinte versão de nvm.

- nvm: v10.16.0

Com isso, se utiliza como framework de desenvolvimento mobile o react native.

Se utiliza um template em typescript, uma vez que se trata da linguagem que será utilizada adiante.

Este projeto utiliza:

- styled-components
- react-native-navigation
- yarn como gerenciador de pacotes
- apollo-client

## Procedimentos para testar e depurar

Para testar e depurar o projeto, esteja dentro do diretório /onboardProject e execute o seguinte comando:

"npx react-native run-ios" / "yarn react-native run-ios"
"npx react-native run-android" / "yarn react-native run-android"

## Arquitetura de projeto

O projeto se organiza em 4 hierarquias:

- Acesso : Responsável pela componente de acesso da aplicação contemplada pelas pastas:

    - ./atomic : Contém os componentes utilizados no projeto

    - ./pages : Contém as definições de páginas da aplicação. Dependência imediata de ./atomic

    - navigation.tsx : Módulo responsável por permitir a navegação entre telas.

Caso o projeto tenha de ser desenvolvido em qualquer outro framework de desenvolvimento front-end i.e.: angular ou react-web, se altera o projeto neste nível da arquitetura.

- Controllers : Responsável pela comunicação do projeto com os outros níveis da arquitetura.

    - ./controllers : Contém as execuções de chamadas graphQL.

Caso o projeto altere os parâmetros de comunicação com o servidor, é esta camada que deve ser alterada. i.e.: Adicionar novos endpoints, queries ou novas mutations.

- Casos de Uso : Responsável por providenciar a comunicação da aplicação com o banco externo e outras funcionalidades uteis em outros contextos do projeto.

    - apolloUtils : Define a comunicação com um servidor apollo

    - dataUtils : Define formas de acesso ao armazenamento local

    - validationUtils : Define funções responsáveis pela validações dos campos do forms

Caso o projeto altere o seu paradigma de comunicação i.e.: de graphQL para REST, é esta camada que deverá ser alterada, ou altere regras de validação e formas de acesso aos dados locais, é esta camada que deve ser alterada.

- Entidade : Não se encontra neste repositório. É a parte do servidor com a qual este projeto frontend se comunica.