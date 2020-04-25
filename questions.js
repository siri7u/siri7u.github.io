/*

Donner toutes les informations sur les pilotes
	SELECT *
	FROM pilote

Donner le nom et l�adresse des pilotes
	SELECT nompil, adresse1, adresse2 
	FROM pilote

Liste des avions de nom A310, A320 et A330 :
	SELECT * 
	FROM avion 
	WHERE nomav = 'A310' or nomav = 'A320' or nomav = 'A330' 

Noms des pilotes qui gagnent entre 2300 Euros et 3500 Euros inclus (donner 2 solutions).
	SELECT nompil 
	FROM pilote 
    WHERE 2300<salaire<3500 

*/




var questions = [{
        "numero": "1",
        "description": "Donner toutes les informations sur les pilotes",

        "regles": [{
                "nom": "select *",
                "regExps": new RegExp(/select\s\*/i),
                "feedbackVrai": "Contient le bon select",
                "feedbackFaux": "Ne contient pas le bon select",
                "poids": -1
            },
            {
                "nom": "from pil",
                "regExps": new RegExp(/from ['|"]?pil['|"]?(?!\S)/i),
                "feedbackVrai": "Contient le bon from",
                "feedbackFaux": "Ne contient pas le bon from",
                "poids": 1
            }
        ],
    },

    {
        "numero": "2",
        "description": "Donner le nom et l’adresse des pilotes",

        "regles": [{
                "nom": "select",
                "regExps": new RegExp(/select\s(?=.*\bnompil\b)(?=.*\badresse1\b)(?=.*\badresse2\b).*/g),
                "feedbackVrai": "Contient select",
                "feedbackFaux": "Ne contient pas select",
                "poids": -1
            },
            {
                "nom": "where",
                "regExps": new RegExp(/from ['|"]?pil['|"]?(?!\S)/i),
                "feedbackVrai": "Contient from",
                "feedbackFaux": "Ne contient pas from",
                "poids": 1
            }
        ],
    },

    {
        "numero": "3",
        "description": "L’identifiant et le nom de chaque pilote par ordre alphabétique",
    },

    {
        "numero": "4",
        "description": "Le nom et la capacité de chacun des avions",
    },

    {
        "numero": "5",
        "description": "Le nom des villes d’où part au moins un vol",
    },
    {
        "numero": "6",
        "description": "Les villes qui sont reliées par au moins un vol",
    },
    {
        "numero": "7",
        "description": "Noms de pilotes qui habitent à Nice ou qui gagnent plus de 2300 Euros",
    },
    {
        "numero": "8",
        "description": "Liste des avions de nom A310, A320 et A330",
    },
    {
        "numero": "9",
        "description": "Noms des pilotes qui gagnent entre 2300 Euros et 3500 Euros inclus (donner 2 solutions).",
    },
    {
        "numero": "10",
        "description": "Les capacités de tous les avions de type AIRBUS",
    },
    {
        "numero": "11",
        "description": "Les noms des avions différents de A310, A320, A330 et A340",
    },


];