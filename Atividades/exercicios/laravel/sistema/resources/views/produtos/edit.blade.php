@extends('principal')

@section('conteudo')

<form method="post" action="{{route('produtos.update', $produto->id)}}">
    @csrf
    @method('PUT')
    <div class="mb-3 mt-3">
        <label for="nome" class="form-label">Nome:</label>
        <input type="text" class="form-control" value="{{ $produto->nome }}" id="nome"  name="nome">
    </div>
    <div class="mb-3">
        <label for="um" class="form-label">Um:</label>
        <input type="text" class="form-control" value="{{ $produto->um }}" id="um" name="um">
    </div>
    <input type="submit" class="btn btn-primary" value="Atualizar" />
</form>

@endsection