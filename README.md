# Dolado: Teste prático para Frontend

## Chatbot com IA e Histórico de Conversas

Este projeto é um chat interativo desenvolvido com Next.js, TypeScript e Tailwind CSS, com duas opções de uso:

- Um chatbot tradicional com opções de resposta

- Um chat com integração com uma IA e histórico persistente de conversas

## Experiência de Desenvolvimento

A experiência de desenvolvimento foi muito boa. Apesar de ser um projeto simples, ele abrange diversas ferramentas modernas como:

- TypeScript

- Tailwind CSS

- Next.js

- Context API

Durante o desenvolvimento, o foco foi estruturar um sistema de chat versátil e escalável, permitindo ao usuário continuar conversas anteriores a partir de onde parou.

## Principais Decisões Técnicas

As decisões ao longo do projeto foram guiadas pela simplicidade, escalabilidade e manuntenção.

- Tailwind CSS: para estilização rápida e eficiente

- Context API: para gerenciamento de estados globais

- TypeScript: para segurança de tipos durante o desenvolvimento

- Hugging Face: utilizado como serviço de IA para respostas interativas

- Netlify: escolhido para hospedagem rápida e gratuita

- Jest: para testes unitários de componentes como Button e Input

- Design responsivo: interface adaptável para mobile e desktop

- UX intuitiva: mensagens de retorno claras e interações que simulam compreensão da necessidade do usuário

# Estrutura de Pastas

A estrutura do projeto foi pensada para facilitar a escalabilidade e manutenção do código:

- app/ # Layout global e rotas
- assets/ # Ícones e imagens
- components/ # Componentes reutilizáveis
  - ├── chat/ # Componentes específicos do chat
  - ├── layout/ # Componentes de layout (header, footer etc.)
  - └── ui/ # Componentes de UI genéricos (botões, inputs)
  - └── test/ # Testes unitários
- context/ # Contextos React (ex: estado do chat)
- data/ # Dados mockados
- hooks/ # Hooks personalizados
- types/ # Tipagens TypeScript
- utils/ # Funções auxiliares (ex: chamada à IA)

## Como rodar o projeto

Via netlify: https://jobfrontenddeveloper.netlify.app/

Clone o repositório:

```bash
git clone https://github.com/danielcalado07/job-frontend-developer.git
```

Navegue até o diretório do projeto:

```bash
cd job-frontend-developer
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## Rodar os testes

Para executar os testes unitários:

```bash
npm run test
```
