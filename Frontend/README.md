# Black Jack

Notre projet est une petite application web permettant de jouer au BlackJack. Elle est conçue avec du React.js pour la partie front, du Python pour la partie back et une base de données.
Le principe du BlackJack est d'obtenir un score le plus proche possible de 21 sans le dépasser : le joueur peut lancer 1, 2 ou 3 dés jusqu'à qu'il mette fin à son tour.
Une fois que tout le monde a joué, le joueur le plus proche de 21 remporte la partie.

## Table des Matières
1. [Fonctionnalités](#fonctionnalités)
2. [Installation](#installation)
3. [Utilisation](#utilisation)
4. [Structure du Projet](#structure-du-projet)
5. [Technologies](#technologies)
6. [Auteurs](#auteurs)


## Fonctionnalités
### Succès
- **Création d'une nouvelle partie** : l'utilisateur a la possibilité de créer une partie avec un nombre de joueur indéfini (les données sont bien envoyées à la base de données).

### En cours
- **Lancer les dés** : la fonctionnalité est proche d'être correcte mais nous ne pouvons pas encore essayer car la liste de joueurs que l'on récupère en front est vide (pourtant remplie dans le back).
- **Mettre fin à son tour** : pour la même raison, cette fonctionnalité est en partie développée mais ne peut pas être testée.
- **Annoncer le vainqueur** : la fonctionnalité n'est développée qu'en back pour l'instant.


## Installation

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/Kant1-18/BlackJack-Final
   ```
2. Lancer le serveur back :
   ```bash
   cd Backend
   python manage.py migrate
   python manage.py makemigrations
   python manage.py runserver
   ```
3. Lancer le front :
   ```bash
   cd Frontend
   npm install
   npm run dev
   ```


## Utilisation

- **Page d'accueil** (`Home.jsx`) : Affiche le formulaire pour créer une nouvelle partie
- **Page de la partie** (`GamePage.jsx`) : Affiche la partie (tableau avec les scores et les joueurs, qui a la main, les actions possibles (lancer les dés, mettre fin au tour...)).


## Structure du Projet

- **Home.jsx** : Page principale avec le formulaire pour créer une partie 
- **GamePage.jsx** : Page de la partie 
- **useCreateGame.js** : Hook permettant de réucpérer les données de la partie dans la base de données 
- **useEndTurn.js** : Hook permettant de mettre fin au tour du joueur
- **useLaunchDice.js** : Hook permettant de lancer les dés
- **useGetPlayers.js** : Hook permettant de récupérer la liste des joueurs dans la base de données


## Technologies

- **Python** : Gestion de la logique serveur et des interactions avec la base de données.
- **React.js** : Interface utilisateur pour jouer au BlackJack.
- **CSS** : Stylisation des différentes pages


## Auteurs
Développé par Kant1-18, Titinite et Matheo_dlvt dans le cadre d'un Bootcamp en cours. Retrouvez plus de détails dans le dépôt [GitHub](https://github.com/Kant1-18/BlackJack-Final).