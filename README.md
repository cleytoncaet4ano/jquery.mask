# Máscara de entrada para campos de texto com jQuery
Este é um plugin jQuery que adiciona uma máscara de formatação para campos de texto HTML. O plugin permite que o valor inserido pelo usuário seja formatado de acordo com um determinado formato especificado.

O arquivo jquery.mask.js contém a função mask, que é responsável por adicionar a máscara de formatação ao campo de texto. A função recebe um parâmetro format, que é uma string que representa o formato da máscara.

## Como usar
Para utilizar o plugin, basta incluir o arquivo jquery.mask.js em seu projeto e chamar a função mask em um seletor jQuery que identifique o campo de texto que deseja-se aplicar a máscara. Por exemplo:

`$('#inputCpf').mask('000.000.000-00');`
`$('#inputCep').mask('00000-00');`

Isso aplicará a máscara de CPF ao campo de texto com o ID inputCpf.

## Como funciona
A função mask adiciona um ouvinte de evento de entrada (input) no elemento selecionado pelo seletor jQuery. A cada vez que o evento é acionado, a função é executada e o valor do elemento é formatado de acordo com o formato especificado.

A função itera sobre cada caractere do formato e verifica se é um zero ('0'). Se for, o próximo caractere numérico do valor é adicionado à string formatada. Caso contrário, o caractere do formato é adicionado diretamente à string formatada.

O resultado é que o valor do elemento é formatado de acordo com o formato especificado, adicionando zeros e caracteres de separação conforme necessário.

## Exemplo de uso
No arquivo index.html deste repositório, há um exemplo de uso do plugin. O código HTML contém um campo de texto para inserir um CEP, que é formatado automaticamente após o usuário inserir os cinco primeiros dígitos:

`<input type="text" id="inputCep" placeholder="00000-000">`

Para testar o exemplo, basta clonar este repositório e abrir o arquivo index.html em seu navegador.
