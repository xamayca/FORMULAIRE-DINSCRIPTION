////////////////////////////////////////////////////////////////////////////////////////

LE BUT DE CET EXERCICE EST DE RENDRE INTERACTIF UN FORMULAIRE D'INSCRIPTION POUR MOBILE
                            [HTML, CSS, JAVASCRIPT]

////////////////////////////////////////////////////////////////////////////////////////

Instructions:

Ne vous préoccupez pas du CSS, les seules classes dont allez avoir besoin sont les suivantes:

.bg-warn: couleur de fond des messages erreurs.
.border-warn : La bordure quand le field a des erreurs.
.bg-valid: couleur de fond des messages valide.
.border-valid : La bordure quand le field est valide.
.opacity-0 : Rend l’élément invisible.
.opacity.1 : Rend l’élément visible.

Vous devez trouvez vous même les Ids de chacun des elements nécessaire a la réalisation de l'exercice.

////////////////////////////////////////////////////////////////////////////////////////

                                     EXERCICE

////////////////////////////////////////////////////////////////////////////////////////


// ÉTAPE - 1 (Input Username) :
1. AFFICHER UN CONSOLE LOG DU INPUT USERNAME.
2. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR QUAND ON ÉCRIT DANS LE INPUT: " I love cats and cats love me "
3. FAIRE APPARAÎTRE EN PLUS LA BORDURE D'ERREUR.
4. FAIRE APPARAÎTRE EN PLUS L'ICÔNE D'ERREUR.
5. MASQUER L'ICÔNE, LA BORDURE ET LE MESSAGE QUAND LE CHAMP EST VIDE.

// ÉTAPE - 2 (Input Username - Transformation du texte) :
1. RENDRE LE PREMIER CARACTÈRE DU TEXTE DANS L'INPUT EN MAJUSCULE.
2. RENDRE LE RESTE DES CARACTÈRES DU TEXTE DANS L'INPUT EN MINUSCULE.
3. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR QUAND LE INPUT EST VIDE: " This field is required "
4. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR SI LE INPUT CONTIENT MOINS DE 3 CARACTÈRES.

// ÉTAPE - 3 (Input Email) :
1. AFFICHER UN CONSOLE LOG DE L'INPUT EMAIL.
2. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR SI L'EMAIL EST VIDE : "Email address is required."
3. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR SI L'EMAIL N'EST PAS VALIDE (utilisez une expression régulière pour vérifier la validité de l'email).
4. FAIRE APPARAÎTRE LA BORDURE D'ERREUR LORSQUE L'EMAIL EST INVALIDE.

// ÉTAPE - 4 (Input Mot de passe) :
1. AFFICHER UN CONSOLE LOG DE L'INPUT MOT DE PASSE.
2. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR SI LE MOT DE PASSE EST VIDE : "Password is required."
3. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR SI LE MOT DE PASSE CONTIENT MOINS DE 6 CARACTÈRES : "Le mot de passe doit contenir au moins 6 caractères."
4. FAIRE APPARAÎTRE LA BORDURE D'ERREUR LORSQUE LE MOT DE PASSE EST INVALIDE.

// ÉTAPE - 5 (Input Confirmation du mot de passe) :
1. AFFICHER UN CONSOLE LOG DE L'INPUT DE CONFIRMATION DE MOT DE PASSE.
2. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR SI LE CHAMP DE CONFIRMATION DE MOT DE PASSE EST VIDE : "Password confirmation is required."
3. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR SI LE CHAMP DE CONFIRMATION DE MOT DE PASSE NE CORRESPOND PAS AU MOT DE PASSE PRINCIPAL : "Password does not match."
4. FAIRE APPARAÎTRE LA BORDURE D'ERREUR LORSQUE LA CONFIRMATION DU MOT DE PASSE EST INVALIDE.

// ÉTAPE - 6 (Checkbox) :
1. AFFICHER UN CONSOLE LOG DE LA CASE À COCHER.
2. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR SI LA CASE À COCHER N'EST PAS COCHÉE : "You must accept the terms of use."

// ÉTAPE - 7 (Bouton Annuler) :
1. LORSQUE LE BOUTON "ANNULER" EST CLIQUÉ, EFFACEZ TOUS LES CHAMPS DE SAISIE.

// ÉTAPE - 8 (BONUS)
1. SI TOUS LES CHAMPS SONT VALIDES, AFFICHEZ UN MESSAGE DE SUCCÈS.
2. LORSQUE LE BOUTON "ENVOYER" EST CLIQUÉ, EFFECTUEZ UNE VALIDATION FINALE DE TOUS LES CHAMPS.
SI L'UN DES CHAMPS N'EST PAS VALIDE, AFFICHEZ UN MESSAGE D'ERREUR GLOBAL INDIQUANT QU'IL Y A DES ERREURS DANS LE FORMULAIRE.