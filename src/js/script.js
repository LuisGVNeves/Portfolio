let discordImg = document.querySelector('#discord img');
let frase_discord = document.querySelector('#frase-discord');


/*
  Se o contador for par, o usuário deu 1 clique então vai aparecer a frase
  do discord, caso o usuário clique de novo, vai ser impar, então vai
  desaparecer a frase.
*/
let cont = 0;
discordImg.addEventListener('click', function(){
  cont++;
  frase_discord.classList.remove('hidden');

  if(cont % 2 ==0){
    frase_discord.classList.add('hidden');
  }
  else{
    frase_discord.classList.remove('hidden');
  }
})