@extends('principal')

@section('conteudo')

<form method="post" action="{{route('produtos.store')}}">
    @csrf
    <div class="mb-3 mt-3">
        <label for="nome" class="form-label">Nome:</label>
        <input type="text" class="form-control" id="nome"  name="nome">
    </div>
    <div class="mb-3">
        <label for="um" class="form-label">Um:</label>
        <input type="text" class="form-control" id="um" name="um">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>

@endsection