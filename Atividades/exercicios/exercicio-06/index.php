<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
  <link rel="stylesheet" href="css/style.css" />
  <title>Cadastro</title>
</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Nome do site</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Estados</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cidades</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Produtos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pessoas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Compras</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="cadastro.html">Cadastro</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="mt-5">
    <div class="container pos">
      <div class="row m-auto">
        <div class="col-sm-8 col-12">
          <form method="POST" class="form" action="validar.php">
            <div class="form-group">
              <label for="nome">Nome</label>
              <input name="nome" type="text" class="form-control" placeholder="Nome" id="nome" />
            </div>
            <label for="sexo">Sexo</label>
            <select name="sexo" class="form-select" aria-label="Default select example">
              <option selected value="feminino">Feminino</option>
              <option value="masculino">Masculino</option>
            </select>
            <div class="form-group">
              <label class="mt-2">
                <h6>Endere??o</h6>
              </label><br>
              <label for="numero">Numero</label>
              <input name="numero" type="text" class="form-control" placeholder="Enter password" id="numero" />
              <label for="rua">Rua</label>
              <input name="rua" type="text" class="form-control" placeholder="Enter password" id="rua" />
              <label for="bairro">Bairro</label>
              <input name="bairro" type="text" class="form-control" placeholder="Enter password" id="bairro" />
              <label for="cep">CEP</label>
              <input name="cep" type="text" class="form-control" placeholder="Enter password" id="cep" />
            </div>
            <button type="submit" class="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</body>

</html>