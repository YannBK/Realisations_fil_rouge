DROP DATABASE IF EXISTS metronome03;
CREATE DATABASE metronome03;

USE metronome03;
/*données de fonctionnement de l'appli destinées à la lecture uniquement*/

CREATE TABLE p_Type(
   id_son_type INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
   instrument VARCHAR(30)
);

CREATE TABLE p_Son(
   id_son INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
   url_son VARCHAR(100),
   fk_type INT,
   CONSTRAINT fk_son_type FOREIGN KEY (fk_type) REFERENCES p_Type(id_son_type)
);

CREATE TABLE p_Choix_Qualite(
   id_choix_qualite INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
   nom VARCHAR(10),
   symbole VARCHAR(5)
);

CREATE TABLE p_Gamme(
   id_gamme INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
   nom VARCHAR(50),
   structure JSON
);

CREATE TABLE p_Preprog(
   id_preprog INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
   nom VARCHAR(30),
   donnees JSON
);

CREATE TABLE p_Array_Note(
   id_array_note INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
   nom VARCHAR(30),
   donnees JSON
);

/*tables relationnelles, données collectées et travaillées*/
CREATE TABLE u_Utilisateur(
   id_utilisateur INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
   login VARCHAR(20) NOT NULL,
   email VARCHAR(50) NOT NULL UNIQUE,
   mot_de_passe VARCHAR(150) NOT NULL
);

CREATE TABLE u_Droit(
   id_droit INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
   nom VARCHAR(10)
);

CREATE TABLE u_Droit_Utilisateur(
   fk_utilisateur INT,
   fk_droit INT,
   PRIMARY KEY(fk_utilisateur, fk_droit),
   CONSTRAINT fk_id_utilisateur FOREIGN KEY(fk_utilisateur) REFERENCES u_Utilisateur(id_utilisateur),
   CONSTRAINT fk_id_droit FOREIGN KEY(fk_droit) REFERENCES u_Droit(id_droit)
);

CREATE TABLE u_Evaluation(
   id_evaluation INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
   valeur TINYINT,
   fk_utilisateur INT,
   CONSTRAINT fk_utilisateur_evaluation FOREIGN KEY(fk_utilisateur) REFERENCES u_Utilisateur(id_utilisateur)
);

CREATE TABLE u_Save_Rythme(
   id_save_rythme INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
   nom VARCHAR(30) NOT NULL,
   donnees JSON,
   fk_utilisateur INT,
   CONSTRAINT fk_utilisateur_save_rythme FOREIGN KEY(fk_utilisateur) REFERENCES u_Utilisateur(id_utilisateur)
);

CREATE TABLE u_Save_Harmo(
   id_save_harmo INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
   nom VARCHAR(30) NOT NULL,
   donnees JSON,
   fk_utilisateur INT,
   CONSTRAINT fk_utilisateur_save_harmo FOREIGN KEY(fk_utilisateur) REFERENCES u_Utilisateur(id_utilisateur)
);

CREATE TABLE u_Save_Trans(
   id_save_trans INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
   nom VARCHAR(30) NOT NULL,
   donnees JSON,
   fk_utilisateur INT,
   CONSTRAINT fk_utilisateur_save_trans FOREIGN KEY(fk_utilisateur) REFERENCES u_Utilisateur(id_utilisateur)
);

CREATE TABLE u_Preference(
   id_preference INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
   nom VARCHAR(30) NOT NULL,
   donnees JSON,
   fk_utilisateur INT,
   CONSTRAINT fk_utilisateur_save_trans FOREIGN KEY(fk_utilisateur) REFERENCES u_Utilisateur(id_utilisateur)
);

CREATE TABLE u_Contact(
   id_contact INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
   nom VARCHAR(30) NOT NULL,
   prenom VARCHAR(30),
   email VARCHAR(50) NOT NULL,
   sujet VARCHAR(50) NOT NULL,
   date_contact DATETIME,
   message TEXT,
   reponse TINYINT,
   fk_utilisateur INT,
   CONSTRAINT fk_utilisateur_contact FOREIGN KEY(fk_utilisateur) REFERENCES u_Utilisateur(id_utilisateur)
);

CREATE TABLE u_Ecran(
   id_ecran INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
   nom VARCHAR(20)
);

CREATE TABLE u_Statistique(
   id_statistique INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
   temps_debut TIMESTAMP,
   temps_fin TIMESTAMP,
   fk_ecran INT,
   fk_utilisateur INT,
   CONSTRAINT fk_statistique_ecran FOREIGN KEY(fk_ecran) REFERENCES u_Ecran(id_ecran),
   CONSTRAINT fk_utilisateur_statistique FOREIGN KEY(fk_utilisateur) REFERENCES u_Utilisateur(id_utilisateur)
);

    