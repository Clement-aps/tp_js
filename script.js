class Voiture{
  constructor(marque, modele, annee, couleur){
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.couleur = couleur;
  }
  
  afficherDetails(){
    console.log("Marque : " + this.marque + " ; Modèle : " + this.modele + " ; Année : " + this.annee + " ; Couleur : " +this.couleur);
  }
}

// Exemple
// const maTwingo = new Voiture("Renaut", "Twingo", 2017, "Orange");
// maTwingo.afficherDetails();

class Garage{
  constructor(){
    this.voitures = [];
  }

  ajouterVoiture(voiture){
    this.voitures.push(voiture);
  }

  afficherVoituresDeLAnnee = (annee) =>{
    const voituresAnnee = this.voitures.filter(voiture => voiture.annee === annee);
    console.table(voituresAnnee, ["marque", "modele", "annee", "couleur"]);
  }

  afficherVoituresDeLaMarque = (marque) =>{
    const voituresMarque = this.voitures.filter(voiture => voiture.marque === marque);
    console.table(voituresMarque, ["marque", "modele", "annee", "couleur"]);
  }

  afficherVoituresParMarqueAvecLettres(lettres) {
    const voituresFiltrees = this.voitures.filter(voiture => voiture.marque.includes(lettres) && voiture.marque.length === 3);
    this.afficherListeVoitures(voituresFiltrees);
  }

  afficherListeVoitures(voitures) {
    if (voitures.length === 0) {
      console.log("Pas de résultat");
    } else {
      voitures.forEach(voiture => {
        voiture.afficherDetails();
        console.log("--------");
      });
    }
  }
}

// Exemple :
//   1. Je crée mon garage
//       const garage = new Garage();
  
//   2. J'ajoute mes voitures
//       const voiture1 = new Voiture("Tesla", "Y", 2020, "Rouge"); 
//       const voiture3 = new Voiture("Peugeot", "307", 2001, "Noir");
//       const voiture2 = new Voiture("Reunaut", "Twingo", 2017, "Orange");
//       const voiture4 = new Voiture("Renaut", "Clio", 2014, "Bleu");

//   3. J'ajoute mes voitures à mon garage
//       garage.ajouterVoiture(voiture1);
//       garage.ajouterVoiture(voiture2);
//       garage.ajouterVoiture(voiture3);
//       garage.ajouterVoiture(voiture4);
  
//   4. Je cherche les voitures de mon garage de l'année 2020
//       garage.afficherVoituresDeLAnnee(2020);

//   5. Je cherche les voitures de mon garage de la marque Renaut
//       garage.afficherVoituresDeLaMarque("Toyota");
  
//   6. Je cherche les voitures de mon garage dont la marque contient les 3 lettre "Tes"
//       garage.afficherVoituresParMarqueAvecLettres("Tes");