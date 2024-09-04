/* 
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para o outro tipo

*/

/* 
    Type Conversion (Typecasting):
      Type Conversion, também conhecido como Typecasting, é o processo de alterar explicitamente o tipo de dado de uma variável para outro tipo de dado. Isso é feito utilizando funções ou operadores específicos para converter um tipo de dado em outro.

    Um exemplo de Type Conversion em JavaScript é:
*/

console.log(Number('9') + 5); // Saída: 14

/* 
  Neste exemplo, a string '9' é convertida explicitamente para o tipo de dado Number utilizando a função Number(). Isso é chamado de Type Conversion ou Typecasting.
*/

/*
    Type Coercion:
      Type Coercion é o processo automático de conversão de valores de um tipo de dado para outro durante operações que envolvem diferentes tipos de dados. Isso acontece implicitamente, sem a necessidade de uma conversão explícita do desenvolvedor.

    Um exemplo de Type Coercion em JavaScript é:
*/

console.log('9' + 5); // Saída: "95"

/*
  Neste exemplo, o JavaScript converte implicitamente o número 5 para a string '5' e então concatena essa string com a string '9'. Isso é chamado de Type Coercion.
*/

