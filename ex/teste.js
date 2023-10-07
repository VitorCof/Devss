const num = Number(prompt("Digite um Número!"));
const numero = document.getElementById('nuber');
const texto = document.getElementById('texto');
numero.innerHTML = num;
texto.innerHTML = `<p>Raiz Quadrada do seu número é: ${num ** 0.5}<p/> 
<p>Seu número é: ${num} é inteiro: ${Number.isInteger(num)}<p/> 
<p> Seu número é NaN:${num}<p/> 
<p>Arredondar o seu número para Baixo: ${Math.floor(num)}<p/> 
<p>Arredondar o seu número para Cima: ${Math.ceil(num)}<p/> <p>Seu número com duas casas décimais: ${num.toFixed(2)}<p/>`;
