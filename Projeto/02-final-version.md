# **CSI606-2021-01 - Remoto - Trabalho Final - Resultados**
## *Aluna(o): Cláudio Vitor Dantas*

--------------

<!-- Este documento tem como objetivo apresentar o projeto desenvolvido, considerando o que foi definido na proposta e o produto final. -->

### Resumo

O trabalho desenvolvido tem como foco o desenvolvimento de um comércio eletrônico voltado para o mercado de bicicletas, mais especificamente Mountain Bike. O usuário terá como escolher os produtos dos seguintes departamentos: componentes, acessórios, casual, marcas e bicicletas; além das categorias existentes em cada um desses departamentos. Qualquer usuário, autenticado ou não, pode escolher produtos e adiciona-los no carrinho; porèm, apenas aqueles que foram autenticados podem prosseguir com a compra.

### 1. Funcionalidades implementadas
* Login </br>
* Cadastro
* Barra de pesquisa
* Carrinho de compras
* Sistema de pagamento Stripe
  
### 2. Funcionalidades previstas e não implementadas
Todas as funcionalidades previstas foram implementadas.
### 3. Outras funcionalidades implementadas
O sistema de pagamento mostrou ser uma funcionalidade relativamente simples e rápida de ser implementada, e por achar que não teria tempo de fazer a implementação, eu decidi não incluí-la nas funcionalidades previstas.
### 4. Principais desafios e dificuldades
A principal dificuldade foi fazer o carrinho com uma lógica semelhante ao que vemos em sites no dia a dia. Além disso, eu tive **muita** difulcade em achar fotos boas e sem direitos autorais.

### 5. Instruções para instalação e execução
Para a execução, é preciso ter o nodejs instalado. Além disso, as seguintes strings de conexão são necessárias: </br>
PORT = 5000</br>
MONGO_URI = "mongodb+srv://fz3r0:general01@claudiocluster.plrha.mongodb.net/mtbecommerce?retryWrites=true&w=majority"</br>
JWT_SECRET = dezzNuts</br>
STRIPE_KEY = sk_test_51K98XDHt0s8JSRoPc7AzfrGCabZ2oRCDFx8L07DeC5OrZTFCpxDvEeFMEjFdHt2wGVCRksAXTMXsXfeAval9wOzx00MUOXctgM

* Instalação utilizando npm</br>
  backend
      
      cd backend
      npm install
      npm start
      
  frontend
      
      cd frontend
      npm install
      npm start
      
* Instalação utilizando yarn</br>
  backend
      
      cd backend
      yarn add
      yarn run start
      
  frontend
      
      cd frontend
      yarn add
      yarn run start

### 6. Referências
* Stripe: https://stripe.com/docs
* Redux Toolkit: https://redux-toolkit.js.org/usage/usage-guide
* E-commerce templates: https://cssauthor.com/e-commerce-website-templates/
