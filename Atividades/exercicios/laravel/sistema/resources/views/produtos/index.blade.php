@extends('principal')

@section('conteudo')

<table class="table table-bordered table-hover table-striped">
    <thead class="thead-dark">
        <tr>
            <th>Nome</th>
            <th>Id</th>
            <th>Um</th>
        </tr>
    </thead>
    <tbody>
        @foreach($produtos as $p)
            <tr>
                <td>{{ $p->nome }}</td>
                <td>{{ $p->id }}</td>
                <td>{{ $p->um }}</td>
            </tr>
        @endforeach
    </tbody>
</table>

@endsection
