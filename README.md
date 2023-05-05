# NLW eSports

> ### Descrição
> Essa é uma aplicação fullstack e multiplataforma (desktop e mobile) com o propósito de conectar jogadores em busca de parceiros para jogos multijogador online no qual foi desenvolvida utilizando majoritariamente React, React Native, Typescript, SQLite e Node.js. Também utiliza outras bibliotecas e ferramentas como Expo, Babel, Prisma e Tailwind CSS. Para utilizá-la, é necessário ter Expo CLI e Node.js instalados, além do Expo Go no smartphone

## Dependências e bibliotecas

- <img height="16" width="15" src="https://res.cloudinary.com/tommello/image/upload/v1674280418/Github/Profile%20Markdown/react_osmnfo.svg"/>  **React:** biblioteca JavaScript para construção de interfaces de usuário. É mantida pela Meta Incorporation e é uma das tecnologias mais populares em aplicações web modernas
- <img height="16" width="15" src="https://res.cloudinary.com/tommello/image/upload/v1674280418/Github/Profile%20Markdown/react_native_uozofa.svg"/> **React Native:** framework para construção de aplicativos móveis utilizando React. Permite o desenvolvimento de aplicativos para iOS e Android com uma única base de código, utilizando componentes nativos do sistema operacional
- <img height="16" width="15" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"/> **Typescript:** linguagem de programação que adiciona tipagem estática e outras funcionalidades ao JavaScript. Permite detectar erros em tempo de compilação e melhorar a qualidade do código em projetos grandes
- <img height="16" width="15" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"/> **Node.js:** ambiente de execução JavaScript baseado no motor V8 do Google Chrome. Permite que o JavaScript seja executado no lado do servidor, permitindo a construção de aplicações web escaláveis e de alta performance
- <img height="16" width="15" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" /> **SQLite:** banco de dados relacional que utiliza arquivos locais para armazenar dados. É uma opção leve e eficiente para aplicações que não exigem alta escalabilidade
- <img height="15" width="15" src="https://res.cloudinary.com/tommello/image/upload/v1683264432/expo_dark_icon_stspgv.png" /> **Expo:** plataforma para desenvolvimento de aplicativos móveis utilizando React Native. Oferece diversas ferramentas para facilitar o desenvolvimento, como um conjunto de componentes pré-construídos e acesso a APIs nativas
- <img height="16" width="15" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" /> **Babel:** transcompilador que permite escrever código JavaScript utilizando recursos mais modernos e compatíveis com padrões recentes, mas que ainda não são suportados por todos os navegadores. O Babel transforma esse código em uma versão compatível para uso em produção
- <img height="16" width="15" src="https://res.cloudinary.com/tommello/image/upload/v1683263929/google_fonts_icon_q0pmrl.svg" /> **Google Fonts:** biblioteca de fontes gratuitas disponibilizada pelo Google. Permite que desenvolvedores utilizem fontes em seus projetos sem precisar armazenar os arquivos localmente
- <img height="16" width="15" style="border-radius: 30px" src="https://res.cloudinary.com/tommello/image/upload/v1683264571/phosphor_icons_c7liwf.png" /> **Phosphor Icons:** conjunto de ícones de código aberto criados pela equipe do GitHub. Os ícones são disponibilizados em formato SVG e podem ser utilizados em projetos web
- <img height="16" width="15" src="https://res.cloudinary.com/tommello/image/upload/v1683264796/radix_icon_vlnmh3.svg" /> **Radix:** conjunto de componentes React desenvolvido pela equipe do Modulz. Oferece componentes para construção de interfaces de usuário acessíveis e com boa performance
- <img height="16" width="15" src="https://res.cloudinary.com/tommello/image/upload/v1682825523/Github/Profile%20Markdown/prisma-orm_lxicqu.svg" /> **Prisma:** ferramenta de mapeamento objeto-relacional (ORM) para Node.js e TypeScript. Permite que desenvolvedores trabalhem com banco de dados utilizando modelos de objetos em vez de escrever SQL diretamente
- <img height="16" width="15" style="border-radius: 30px" src="https://res.cloudinary.com/tommello/image/upload/v1683264139/express_js_icon_i3mjtq.png" /> **Express.js:** framework para construção de aplicações web em Node.js. Oferece uma camada de abstração sobre o protocolo HTTP e facilita a criação de rotas e manipulação de requisições e respostas
- <img height="16" width="15" style="border-radius: 30px" src="https://res.cloudinary.com/tommello/image/upload/v1683265024/axios_djp6gm.ico" />  **Axios HTTP:** biblioteca JavaScript para realização de requisições HTTP em navegadores e Node.js. Oferece uma API simples e fácil de usar para realizar chamadas a APIs externas
- <img height="16" width="15" style="border-radius: 30px" src="https://res.cloudinary.com/tommello/image/upload/v1683265180/tailwind_icon_wpqxn8.png" />  **Tailwind CSS:** framework CSS que utiliza classes predefinidas para facilitar a criação de layouts responsivos e estilos personalizados. Permite a criação de interfaces de usuário sem a necessidade de escrever CSS do zero
- <img height="16" width="15" src="https://res.cloudinary.com/tommello/image/upload/v1683265251/vitejs_icon_xf8wqy.svg" /> **Vite.js:** ferramenta de inicialização rápida para projetos JavaScript e TypeScript. Permite que o desenvolvimento seja realizado com um servidor de desenvolvimento integrado e oferece recursos como recarregamento veloz para acelerar o ciclo de desenvolvimento

## Pré-requisitos

- [**Expo CLI**](https://docs.expo.dev/archive/expo-cli/#installation) instalado na máquina com versão mínima 48.0.0 ou superior
- [**Node.js**](https://nodejs.org/en/download) instalado na máquina com versão mínima 17.0.0 ou superior
- [**Expo Go**](https://expo.dev/client) instalado em seu smartphone (disponível para iOs e Android)

## Instalação e uso local

1. Clone o repositório

```bash
gh repo clone T0mAlexander/NLW-eSports
```

2. Acesse os diretórios `mobile`, `server` e `web` e instale as dependências

```bash
cd <nome-do-diretório> && npm install
```

3. Após a instalação, inicie o servidor

```bash
npm run server
```

- 💡 O servidor estará sendo executado na porta `3000`

- **Dica de ouro:** caso queira ver a interface do banco de dados, digite o comando `npx prisma studio` no terminal

> **Lembrete:** certifique-se antes de navegar no diretório `server`

4. No diretório ``mobile``, troque o IP exemplar pelo IPV4 da sua máquina localizados nas linhas N°30 e N°37 do arquivo [src/screens/Game/index.tsx](https://github.com/T0mAlexander/NLW-eSports/blob/main/mobile/src/screens/Game/index.tsx#L30) e também na linha N° 24 do arquivo [src/screens/Home/index.tsx](https://github.com/T0mAlexander/NLW-eSports/blob/main/mobile/src/screens/Home/index.tsx#L24)

❓ **Para descobrir seu IPV4**

>**Linux**: abra o terminal e digite o comando

```bash
ifconfig | grep -m 1 inet
```

>**Windows:** abra o CMD e digite

```bash
ipconfig | findstr /R /C:"IPv4 Address"
```

5. Ao finalizar, vá até o diretório `mobile` e inicie a instância da aplicação para dispositivo móvel e em seguida, leia o QR Code gerado em seu terminal com o aplicativo do **Expo Go**

```bash
expo start
```

> ⚠️ Este processo poderá levar entre 5 até 10 minutos na primeira vez, pois o Expo estará fazendo a transcompilação do código para renderizar a aplicação. Após isso, você poderá interagir com a aplicação final

6. Para iniciar a aplicação web, vá até o diretório `web` e digite o comando abaixo

```bash
npm run dev
```

**Lembrete:** o Vite.js por padrão hospeda a prévia da aplicação desktop no endereço `http://localhost:5173`

## Modelagem do Banco de Dados

Este projeto utiliza o SQLite. A URL de conexão é determinada por uma variável de ambiente disponível no arquivo [.env.example](https://github.com/T0mAlexander/NLW-eSports/blob/main/server/src/.env.example) em que seu valor deverá ser o caminho relativo até o arquivo no formato **.sqlite** gerado na pasta [database](https://github.com/T0mAlexander/NLW-eSports/tree/main/server/src/database)

### Tabela Game 🎮

Representa um jogo na aplicação.

| Coluna       | Descrição                                                  |
|--------------|------------------------------------------------------------|
| id           | ID do jogo (UUID).                                         |
| title        | Título do jogo.                                            |
| bannerUrl    | URL da imagem do banner do jogo.                           |
| ads          | Relação com os anúncios publicados para este jogo.          |

### Tabela Ad 📢

Representa um anúncio publicado para um jogo na aplicação.

| Coluna       | Descrição                                                                        |
|--------------|----------------------------------------------------------------------------------|
| id           | ID do anúncio (UUID).                                                            |
| gameId       | ID do jogo ao qual o anúncio está vinculado.                                      |
| name         | Nome do anunciante.                                                              |
| yearsPlaying | Quantidade de anos que o anunciante joga o jogo.                                  |
| discord      | Nome do usuário do Discord do anunciante.                                        |
| weekDays     | Dias da semana que o anunciante está disponível para jogar. Separados por vírgula.|
| hourStart    | Horário de início em que o anunciante está disponível para jogar.                 |
| hourEnd      | Horário de término em que o anunciante está disponível para jogar.                |
| useVoip      | Se o anunciante usa ou não um programa de voz durante o jogo.                      |
| createdAt    | Data e hora em que o anúncio foi criado.                                          |

### Relações

- O modelo `Ad` possui uma relação `game` com o modelo `Game`, onde `gameId` é um chave estrangeira que referencia o campo `id` do modelo `Game`.

## Termos de uso

Este projeto é de livre uso para outros sem nenhuma restrição para cópias ou forks 👍🏻

### Autor: Tom Alexander
