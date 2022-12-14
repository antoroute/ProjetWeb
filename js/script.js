window.addEventListener('scroll',()=>{
    const{scrollTop}=document.documentElement;
    var sticky=document.getElementById("sticky-header");
    if(scrollTop>=220){
        sticky.style.position="fixed";
        sticky.style.top="0px";
    }
    else{
        sticky.style.position="absolute";
        sticky.style.top="220px";
    }
})

class Kholle{
    constructor(filiere,matiere,chapitre,enonce,commentaire,correction){
        this.filiere=filiere;
        this.matiere=matiere;
        this.chapitre=chapitre;
        this.enonce=enonce;
        this.commentaire=commentaire;
        this.correction=correction
    }
}

function KholleSaisie(){
    const kholle = document.forms.newKholle; 

    const filiereSaisi=document.createElement("td");
    const matiereSaisie=document.createElement("td");
    const chapitreSaisie=document.createElement("td");
    const enonceSaisi=document.createElement("td");
    const commentaireSaisi=document.createElement("td");
    const correctionSaisi=document.createElement("td");

    filiereSaisi.textContent = kholle.elements.filiere.value;
    matiereSaisie.textContent = kholle.elements.matiere.value;
    chapitreSaisie.textContent = kholle.elements.chapitre.value;
    enonceSaisi.textContent = kholle.elements.enonce.value;
    commentaireSaisi.textContent = kholle.elements.commentaire.value;
    correctionSaisi.textContent = kholle.elements.correction.value;

    const nouvelleKholle = new Kholle(filiereSaisi,matiereSaisie,chapitreSaisie,enonceSaisi,commentaireSaisi,correctionSaisi);
    console.log(nouvelleKholle)
    return nouvelleKholle
}

var mesKholles = [];
function pushKholle(uneKholle){
    mesKholles.push(uneKholle);
}

function supprimer(){
    /*const table = document.querySelector('.datatable tbody');*/
    const table = document.querySelector('.content article');
    while(table.firstChild){
        table.firstChild.remove();
    };
    //console.log(table);
};

function ajouter(){
    supprimer();
    pushKholle(KholleSaisie());
    mesKholles.forEach((uneKholle)=>{

        const item = document.createElement("tr");
        const filiere=document.createElement("td");
        const matiere=document.createElement("td");
        const chapitre=document.createElement("td");
        const enonce=document.createElement("td");
        const commentaire=document.createElement("td");
        const correction=document.createElement("td");

        filiere.textContent = uneKholle.filiere.innerText;
        matiere.textContent = uneKholle.matiere.innerText;
        chapitre.textContent = uneKholle.chapitre.innerText;
        enonce.textContent = uneKholle.enonce.innerText;
        commentaire.textContent = uneKholle.commentaire.innerText;
        correction.textContent = uneKholle.correction.innerText;

        item.append(filiere,matiere,chapitre,enonce,commentaire,correction);

        if(uneKholle){
            /*const table = document.querySelector('.datatable tbody');*/
            const table = document.querySelector('.content article');
            console.log(item);
            console.log(table);
            table.appendChild(item);
        }
    })
};


