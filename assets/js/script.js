//creo un array di cognomi

var cognomi= ['rossi','trombetta','de bonis','bianchi','chiesa'];

//creo un prompt dove vado a chiedere all'utente il cognome

var cognome_utente= prompt('Inserisci il tuo cognome');

//creo una condizione dove se l'utente non inserisce nulla comparirà un alert,mentre se inserisce del testo(in questo caso il cognome) andrò a inserirlo nell'array cognomi,subito dopo vado a ordinare l'array in ordine alfabetico grazie a "sort" in modo che quando andrò a chiedere in quale posizione si trova tramite la variabile "i" mi dirà la posizione aggiornata.

var flag=false;
var i = 0;

if( !(cognome_utente === '') && !(cognome_utente === null) ){

    cognomi.push(cognome_utente);
    cognomi.sort();

    while(flag===false){

        var cognome=cognomi[i]
    
        if(cognome_utente==cognome){
            console.log(i);
            console.log(cognome_utente);
            flag=true;
        }
        i++;
    }
    
}else{

    alert('Riempi il campo con il tuo cognome')

}

// effettuo un console.log per vedere l'array ordinato

console.log(cognomi[0]);
console.log(cognomi);







