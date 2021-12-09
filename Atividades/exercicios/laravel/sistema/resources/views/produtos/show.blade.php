@extends('principal')

@section('conteudo')

<h1>Dados do produto</h1>
<p>Id: {{ $produto->id }}</p>
<p>Nome: {{ $produto->nome }}</p>
<p>Um: {{ $produto->um }}</p>


<a href="{{route('produtos.index')}}">Voltar</a>

<form onsubmit="return confirm('Tem certeza?')" method="post" action="{{route('produtos.destroy', $produto->id)}}">
    @csrf
    @method('DELETE')
    <input type="submit" value="Excluir" />
</form>

@endsection