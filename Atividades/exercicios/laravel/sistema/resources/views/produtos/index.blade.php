@extends('principal')

@section('conteudo')

<a href="{{ route('produtos.create')}}">Cadastrar</a>
<table class="table table-bordered table-hover table-striped">
    <thead class="thead-dark">
        <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Um</th>
            <th>Exibir</th>
            <th>Editar</th>
        </tr>
    </thead>
    <tbody>
        @foreach($produtos as $p)
        <tr>
            <td>{{ $p->id }}</td>
            <td>{{ $p->nome }}</td>
            <td>{{ $p->um }}</td>
            <td><a href="{{route('produtos.show', $p->id)}}">Exibir</a></td>
            <td><a href="{{route('produtos.edit', $p->id)}}">Editar</a></td>
        </tr>
        @endforeach
    </tbody>
</table>

@endsection