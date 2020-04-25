//liste des règles

var regles = [{
        "nom": "select",
        "regExps": new RegExp(/select/g),
        "feedbackVrai": "Contient select",
        "feedbackFaux": "Ne contient pas select",
        "poids": -1
    },
    {
        "nom": "where",
        "regExps": new RegExp(/where/g),
        "feedbackVrai": "Contient where",
        "feedbackFaux": "Ne contient pas where",
        "poids": 1
    },


];

//récupération du texte de la requête (click)

//['|"]

//boucle de tests