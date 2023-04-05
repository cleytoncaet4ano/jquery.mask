# Plugin JavaScript de Máscara de Entrada

Este é um plugin jQuery para criar máscaras de entrada em campos de formulário de acordo com um formato especificado.

## Instalação

Para usar este plugin, basta incluir o arquivo `jquery.mask.js` em sua página HTML após o jQuery:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="jquery.mask.js"></script>
```

## Uso

O plugin adiciona um método `mask` à API jQuery que pode ser chamado em um elemento de formulário para adicionar uma máscara de entrada. O método aceita um argumento que pode ser uma string de formato ou uma função que retorna uma string de formato com base no valor atual do campo.

```javascript
$('#cep').mask('00000-000');
$('#data').mask('00/00/0000');
```
Para mascarar número de telefone com ou sem o nono dígito siga o exemplo abaixo:
```javascript
$('#telefone').mask(function (value) {
    return value.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
});
```
Para mascarar um campo que pode receber CPF ou CNPJ use:
```javascript
$('#cpf-cnpj').mask(function (value) {
    return value.length <= 11 ? '000.000.000-00' : '00.000.000/0000-00';
});
```

## Como funciona
O plugin adiciona um manipulador de eventos `input` ao elemento de formulário que chama uma função sempre que o valor do campo é alterado pelo usuário. A função remove todos os caracteres não numéricos do valor do campo e usa o formato especificado para criar uma nova string de valor formatada.

O formato especificado é uma string que contém caracteres de espaço reservados para cada caractere numérico no valor do campo. O caractere `0` é um espaço reservado para um dígito numérico obrigatório, enquanto outros caracteres são adicionados ao valor formatado sem considerar o valor do campo.
