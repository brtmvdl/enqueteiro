@extends('layout.default')

@section('content')
<div class="jumbotron">
    <h1>Criar enquetes</h1>
    <p class="lead">Crie suas enquetes de maneira rápida e prática.</p>
    <p><a class="btn btn-lg btn-success" href="{{ route('create') }}" role="button">Começe agora</a></p>
</div>

<div class="row marketing">
    @foreach($forms->chunk(3) as $line)
    <div class="col-lg-6">
        @foreach($line as $form)
        <h4>{{ $form['title'] }}</h4>
        <p><a href="{{ route('iframe', ['id' => $form['id']]) }}">responder</a></p>

        @endforeach
    </div>
    @endforeach
</div>
@endsection