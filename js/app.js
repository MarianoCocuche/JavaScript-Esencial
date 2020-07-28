"use strict"

var N=3, 
    consultas= [1, 2, 3, 2, 4, 2, 3, 3, 4, 2, 1, 2],
    consulta = consultas.length,
    cache = [0, 0, 0],
    segundos = 0,
    ValorMaximo=0,
    i=0;

for(i=0; i<consulta; i++){
   
   if(segundos>ValorMaximo) ValorMaximo=segundos;
   if(cache[0]==consultas[i] || cache[1]==consultas[i] || cache[2]==consultas[i])
   segundos++;
   else{
               cache[0] = cache[1];
               cache[1] = cache[2];
               cache[2] = consultas[i];
               while(cache[0]==0 || cache[1]==0 || cache[2]==0) segundos++;
   }

}