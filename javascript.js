// Je récupère les éléments du dom dont j'ai besoin. Et je crée le mon tableau de caracteres.
let inscription = document.querySelector('[name=inscription]');
let connection = document.querySelector('[name=login]');
let genererPassword = document.querySelector("#genererPassword");
let email = document.querySelector('#email')
let email_login = document.querySelector('#email_login');
let password = document.querySelector('#password');
let password2 = document.querySelector('#password2')
let password_login = document.querySelector('#password_login');
let couleur = document.querySelector('#couleur');
let apercu_couleur = document.querySelector('.apercu_couleur');
let voirPassword = document.querySelector('button[name=voirPassword]')
let submit = document.querySelectorAll('button[name=submit]')
let message = document.querySelector('.message');
let alphadecimal =
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '_', '-', '@', '&', '{', '}'];
let randomEntre8Et16 = Math.floor(Math.random() * (16 - 8 + 1)) + 8;
// Création de la fonction genererMotDePasse()
function genererMotDePasse(){
    let motDePasse = ''
    for (let i=0 ; i<randomEntre8Et16 ; i++){
        motDePasse += alphadecimal[Math.floor(Math.random() * alphadecimal.length)];
    }
    return motDePasse;
}
// Création de la fonction afficherEtCacherMotDePasse()
function afficherEtCacherMotDePasse(element) {
    if(element.type === 'text'){
        element.type = 'password';
    }else{
        element.type = 'text';
    }
}

function nouvelObjet()[
    let personne = new Object();
    maVoiture.fabricant = "Ford";
    maVoiture.modele = "Mustang";
    maVoiture.annee = 1969;
]

// Fonctions Jquery pour vrifier que les champs sont tous bien remplis
$(inscription).on('change', function(){
    if($(email).val() !== '' && $(password).val() !== '' && $(password2).val() !== ''){
        $(submit[0]).prop('disabled', false);
    }else{
        $(submit[0]).prop('disabled', true);
    }
})

// Gestion de la taille et de la couleur de la div apercu_couleur, et modification en cas d'evenement 'change'
couleur.addEventListener('change', function(){
    apercu_couleur.style.width = '100px';
    apercu_couleur.style.height = '100px';
    apercu_couleur.style.backgroundColor = couleur.value;
})

// Appel des fonctions crées
// Appel de genererPassword
genererPassword.addEventListener('click', function (){
    password.value = genererMotDePasse();
    password2.value = password.value;
})
// Appel de voirPassword
voirPassword.addEventListener('click', function (){
    afficherEtCacherMotDePasse(password)
    afficherEtCacherMotDePasse(password2)
})

async function afficherFilms() {
    const reponse = await fetch("ajax.php");
    const films = await reponse.json();
    console.log(films);
}

submit[0].addEventListener('click', function(e){
    e.preventDefault();
    fetch('javascript.js',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            title: email,
            body: email, password, password2
        })
    })
    .then(response =>{
        if(!response.ok){
            console.log('pas ok')
            return false;
        }
        return response;

    })
        .then(data =>{
            if(password.value === password2.value){
                console.log('t\'es chaud t\'es chaud');
                message.style.display = "block";
                message.style.backgroundColor = 'green';
                message.style.width = '50px';
                message.style.height = '50px';
                email_login.value += email.value;
                password_login.value += password.value;
                submit[1].disabled = false;

            }else{
                console.log('t\'es pas chaud t\'es pas chaud');
                message.style.display = "block";
                message.style.backgroundColor = 'red';
                message.style.width = '50px';
                message.style.height = '50px';
            }
        });
})