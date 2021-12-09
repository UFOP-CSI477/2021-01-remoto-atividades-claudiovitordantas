<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <title>Document</title>
</head>

<body>
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link " aria-current="page" href="{{route('principal')}}">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{route('produtos.index')}}">Produtos</a>
        </li>
    </ul>

    @if(session('mensagem'))
    <div class="alert alert-success">
        {{session('mensagem')}}
    </div>
    @endif

    @yield('conteudo')

</body>

</html>