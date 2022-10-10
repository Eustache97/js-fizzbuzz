// PSEUDO-CODICE
// prendo l'elemento html in cui voglio andare ad inserire gli elenti creati
const blackboard = document.querySelector(".blackboard")
console.log(blackboard);
blackboard.classList.add("container")
// chiedo all'utente quanti numeri vuole stampare
const printLimit = parseInt(prompt("Quanti numeri vuoi stampare?"));
console.log(printLimit, typeof printLimit);
//creo un loop inizializzando il contatore a 1
//finche il coltatore è minore uguale a 100 lo incremento di 1
for (let i = 1; i <= printLimit; i++) {
    // creo l'emento html
    const box = document.createElement("div")
    //all'elemento creato gli aggiungo la classe che caratterizzerà anche tutti gli altri elementi
    box.classList.add("box")
    console.log(box);
    blackboard.append(box)
    /* per sapere se il valore corrente del contatore è un multiplo di 3 o di 5 dobbiamo fare la divisione 
     del valore  del contatore per 3 e 5; se il resto è 0 vuol dire che è un multiplo.*/
     const multiple3 = i % 3;
     console.log(multiple3);
     
     const multiple5 = i % 5;
     
     /*SE la divisione tra il valore del contatore e 3 mi da resto 0 E la divisione tra il valore
      del contatore e 5 mi da resto 0*/
       //ALLORA l'elemento html creato conterrà FIZZBUZZ
       //all'elemento creato aggiungo la classe che mi da lo sfondo giallo-arancio
  // ALTRIMENTI SE la divisione tra il valore del contatore e 3 mi da resto 0
                  // ALLORA l'elemento html creato conterrà FIZZ
                  //all'elemento creato aggiungo la classe che mi da lo sfondo verde-acqua
             // ALTRIMENTI SE la divisione tra il valore del contatore e 5 mi da resto 0
                                //ALLORA l'elemento html creato conterrà BUZZ 
                            //ALTRIMENTI l'elemento html creato conterrà il valore del contatore
                            //all'elemento creato aggiungo la classe che mi da lo sfondo blu chiaro
    if(multiple3 == 0 && multiple5 == 0){
        box.innerHTML = `fizzbuzz`;
        console.log(box.innerHTML);
        box.classList.add("bg_violet")
        console.log(box.classList);

     }else if(multiple3 == 0){
                box.innerHTML = `fizz`;
                console.log(box.innerHTML);
                box.classList.add("bg_acqua")
                console.log(box.classList);
            }else if(multiple5 == 0){
                        box.innerHTML = `buzz`;
                        console.log(box.innerHTML);
                        box.classList.add("bg_yellorange")
                        console.log(box.classList);
                    }else{
                        box.innerHTML = `${i}`;
                        console.log(box.innerHTML);
                        box.classList.add("bg_lightblue")
                        console.log(box.classList);
                    }
                   
}
    
                                

             