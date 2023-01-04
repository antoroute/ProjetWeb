
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
    return nouvelleKholle
}

var mesKholles = [];
function pushKholle(uneKholle){
    mesKholles.push(uneKholle);
}

function supprimer(){
    const table = document.querySelector('.box tbody');
    while(table.firstChild){
        table.firstChild.remove();
    };
};

function ajouter(){
    supprimer();
    pushKholle(KholleSaisie());
    mesKholles.forEach((uneKholle)=>{

        const item = document.createElement("tr");
        const filiere=document.createElement("td");
        const matiere=document.createElement("td");
        const chapitre=document.createElement("td");
        const commentaire=document.createElement("td");
        const enonceCorrection=document.createElement("td");

        filiere.textContent = uneKholle.filiere.innerText;
        matiere.textContent = uneKholle.matiere.innerText;
        chapitre.textContent = uneKholle.chapitre.innerText;
        enonceCorrection.textContent = uneKholle.enonce.innerText+" "+uneKholle.correction.innerText;
        commentaire.textContent = uneKholle.commentaire.innerText;

        item.append(filiere,matiere,chapitre,enonceCorrection,commentaire);

        if(uneKholle){
            const table = document.querySelector('.box tbody');
            table.appendChild(item);
        }
    })
};

//affichage gallery depuis JSON

var mesKhollesJson = [];

function lectureJson(){
    const kholle = document.forms.searchKholle; 

    const filiereSaisi=document.createElement("td");
    const matiereSaisie=document.createElement("td");

    filiereSaisi.textContent = kholle.elements.filiere.value;
    matiereSaisie.textContent = kholle.elements.matiere.value;

    fetch("../json/gallery.json")
        .then(res=>res.json())
        .then(data=> {  
            data[filiereSaisi.textContent][matiereSaisie.textContent].forEach(kholle =>{
                mesKhollesJson.push(kholle);
            });
            afficher();
        });
    

}


function afficher(){
    mesKhollesJson.forEach((uneKholle)=>{

            const item = document.createElement("tr");
            const chapitre=document.createElement("td");
            const commentaire=document.createElement("td");
            const enonceCorrection=document.createElement("td");

            chapitre.textContent = uneKholle.chapitre;
            enonceCorrection.textContent = uneKholle.enonce+" "+uneKholle.correction;
            commentaire.textContent = uneKholle.commentaire;

            item.append(chapitre,enonceCorrection,commentaire);

            if(uneKholle){
                const table = document.querySelector('.box tbody');
                table.appendChild(item);
            }
    });
}

function supprimerGallery(){
    const table = document.querySelector('.box tbody');
    while(table.firstChild){
        table.firstChild.remove();
    };
    mesKhollesJson = [];
}

function affichageJson(){
    supprimerGallery();
    lectureJson();
}


function test(){
    fetch("../json/gallery.json")
        .then(res=>res.json())
        .then(data=> {  
            console.log(data);
        });
}