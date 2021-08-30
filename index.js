var nota=parseFloat(prompt('Digite a sua nota'))

if(nota>=6.0 && nota<10.0){
  alert('Parabéns, você foi aprovado!')
}
else if(nota<6.0){
  alert('Você foi reprovado.')
}
else {
  alert('Valor inválido')
}