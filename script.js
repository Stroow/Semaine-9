
	 <script>
      
        
    var $liste = document.getElementById("liste");
    var $prenom = document.getElementById("prenom");
    var $nom = document.getElementById("nom");
    var $numero = document.getElementById("numero");
    var $ajouter = document.getElementById("ajouter");  
    
    var contacts = [{
     prenom: "David",
     nom: "Parisot",
     numero: "0158456789"},
 
    {prenom: "Sab",
    nom: "Rina",
    numero: "0112456789"
}];
function texteContact(contact) {
    return contact.prenom + " " + contact.nom + " (" + contact.numero + ")";
}
function afficherListe() {
    var elements = "";
    for (i = 0; i < contacts.length; i++) {
        elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
    $liste.innerHTML = elements;
}
function ajouter() {
    contacts.push({
        prenom: $prenom.value,
        nom: $nom.value,
        numero: $numero.value
    });
    afficherListe();
    }
    $ajouter.onclick = ajouter;
    afficherListe();
        
    </script>