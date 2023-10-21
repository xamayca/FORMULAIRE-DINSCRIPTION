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


// ÉTAPE - 1 (Input Name) :
1. AFFICHER UN CONSOLE LOG DU INPUT NAME.
2. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR QUAND ON ÉCRIT DANS LE INPUT: " I love cats and cats love me "
3. FAIRE APPARAÎTRE EN PLUS LA BORDURE D'ERREUR.
4. FAIRE APPARAÎTRE EN PLUS L'ICÔNE D'ERREUR.
5. MASQUER L'ICÔNE, LA BORDURE ET LE MESSAGE QUAND LE CHAMP EST VIDE.

// ÉTAPE - 2 (Input Name - Transformation du texte) :
1. RENDRE LE PREMIER CARACTÈRE DU TEXTE DANS L'INPUT EN MAJUSCULE.
2. RENDRE LE RESTE DES CARACTÈRES DU TEXTE DANS L'INPUT EN MINUSCULE.
3. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR QUAND LE INPUT EST VIDE: " This field is required "
4. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR SI LE INPUT CONTIENT MOINS DE 3 CARACTÈRES.


////////////////////////////////////////////////////////////////////////////////////////

                                     EXERCICE PHASE 1

////////////////////////////////////////////////////////////////////////////////////////

// ÉTAPE - 1 (Mise a jour du formulaire) :
1. EMPÊCHER LES INPUT D'ETRE VIDER QUAND ON CLIQUE SUR LE BOUTON ENVOYER.

////////////////////////////////////////////////////////////////////////////////////////

                                     EXERCICE PHASE 2

////////////////////////////////////////////////////////////////////////////////////////

// ÉTAPE - 1 (Input Username & LastName) :
1. CREE UNE FONCTION QUI GÈRE LES MESSAGE D'ERREURS POUR LE CHAMP NAME ET LAST NAME.


////////////////////////////////////////////////////////////////////////////////////////

                                     EXERCICE PHASE 3

////////////////////////////////////////////////////////////////////////////////////////

// ÉTAPE - 1 (Input Email) :
1. AFFICHER UN CONSOLE LOG DE L'INPUT EMAIL.
2. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR SI L'EMAIL EST VIDE : "Email address is required."
3. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR SI L'EMAIL N'EST PAS VALIDE (utilisez une expression régulière pour vérifier la validité de l'email).
4. FAIRE APPARAÎTRE LA BORDURE D'ERREUR LORSQUE L'EMAIL EST INVALIDE.

// ÉTAPE - 2 (Input Mot de passe) :
1. AFFICHER UN CONSOLE LOG DE L'INPUT MOT DE PASSE.
2. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR SI LE MOT DE PASSE EST VIDE : "Password is required."
3. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR SI LE MOT DE PASSE CONTIENT MOINS DE 6 CARACTÈRES : "The password must contain at least 6 characters."
4. FAIRE APPARAÎTRE LA BORDURE D'ERREUR LORSQUE LE MOT DE PASSE EST INVALIDE.

// ÉTAPE - 3 (Input Confirmation du mot de passe) :
1. AFFICHER UN CONSOLE LOG DE L'INPUT DE CONFIRMATION DE MOT DE PASSE.
2. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR SI LE CHAMP DE CONFIRMATION DE MOT DE PASSE EST VIDE : "Password confirmation is required."
3. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR SI LE CHAMP DE CONFIRMATION DE MOT DE PASSE NE CORRESPOND PAS AU MOT DE PASSE PRINCIPAL : "Password does not match."
4. FAIRE APPARAÎTRE LA BORDURE D'ERREUR LORSQUE LA CONFIRMATION DU MOT DE PASSE EST INVALIDE.

// ÉTAPE - 4 (Checkbox) :
1. AFFICHER UN CONSOLE LOG DE LA CASE À COCHER.
2. FAIRE APPARAÎTRE LE MESSAGE D'ERREUR SI LA CASE À COCHER N'EST PAS COCHÉE : "You must accept the terms of use."

// ÉTAPE - 5 (Bouton Annuler) :
1. LORSQUE LE BOUTON "ANNULER" EST CLIQUÉ, EFFACEZ TOUS LES CHAMPS DE SAISIE.

////////////////////////////////////////////////////////////////////////////////////////

                                     EXERCICE BONUS

////////////////////////////////////////////////////////////////////////////////////////

// ÉTAPE - 1 (BONUS)
1. SI TOUS LES CHAMPS SONT VALIDES, AFFICHEZ UN MESSAGE DE SUCCÈS.
2. LORSQUE LE BOUTON "ENVOYER" EST CLIQUÉ, EFFECTUEZ UNE VALIDATION FINALE DE TOUS LES CHAMPS.
SI L'UN DES CHAMPS N'EST PAS VALIDE, AFFICHEZ UN MESSAGE D'ERREUR GLOBAL INDIQUANT QU'IL Y A DES ERREURS DANS LE FORMULAIRE.