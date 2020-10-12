var nome_utente = prompt ('Come ti chiami?')
var cognome_utente = prompt ("Qual'è il tuo cognome?")
var colore_utente = prompt ("Qual'è il tuo colore preferito?")
var anno_corrente = prompt ("Qual'è l'anno corrente?")

document.getElementById('password').innerHTML = nome_utente + cognome_utente + colore_utente + anno_corrente;
