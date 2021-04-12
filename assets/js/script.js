//creo un array di cognomi

var cognomi= ['rossi','trombetta','de bonis','bianchi','chiesa'];

//creo un prompt dove vado a chiedere all'utente il cognome

var cognome_utente= prompt('Inserisci il tuo cognome');

//creo una variabile "flag" e una variabile "corrente", userò la prima per poter iniziare e interrempere il ciclo,mentre la seconda per incrementare il valore durante il ciclo.

var flag=false;
var corrente = 0;

//creo una condizione dove se l'utente non inserisce nulla comparirà un alert,mentre se inserisce del testo(in questo caso il cognome) andrò a inserirlo nell'array cognomi,subito dopo vado a ordinare l'array in ordine alfabetico grazie a "sort" in modo che quando andrò a chiedere in quale posizione si trova tramite la variabile "corrente" mi dirà la posizione aggiornata.

if( !(cognome_utente === '') && !(cognome_utente === null) ){

    cognomi.push(cognome_utente);
    cognomi.sort();

    while(flag===false){

        var cognome=cognomi[corrente];
        
        if(cognome==cognome_utente){
            flag=true;
        }
        corrente++;
    }
    
}else{

    alert('Riempi il campo con il tuo cognome')

}

//riordino l'array tramite "sort" (cosi che eventualmente l'utente non aggiungesse nessun cognome l'array rimarrà ordinato) e creo una variabile "i" ed un ciclo while per stampare a video l'intero array

cognomi.sort();

var i=0;

while(i < cognomi.length){

    //creo una variabile per interagire con la l'elemento contenente l'id "lista" e per poterlo leggere prima di aggiungergli un nuovo valore,facendo cosi invece di sovrascriversi va ad aggiungere l'elemento che lo precedeva

    var lista_cognomi=document.getElementById('lista').innerHTML
    document.getElementById('lista').innerHTML= lista_cognomi + '<li>' + cognomi[i] + '</li>';
    i++;

}

//qui vado a specificare che se "flag" è uguale a "true" e vado a stampare a video la posizione del cognome_utente (la posizione la inserisco qui perchè voglio che la posizione venga data dopo l'elenco dell'array)

if(flag===true){

    document.getElementById('posizione').innerHTML='Sei in '+ corrente +' posizione della lista.';
}










