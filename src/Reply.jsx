import { useState } from "react";

const Reply = () => {
  // je créé une variable avec useState, et je lui donne une valeur par défaut (false)
  // la valeur de cette variable est enregistrée en dehors de mon composant
  // elle est enregistrée dans une sorte de bdd
  // la fonction useState me donne accès à la valeur de la variable
  // et me donne également une fonction permettant de modifier la variable
  // au premier chargement du composant, la valeur de la variable est false
  // si le composant est rechargée, react va regarder si la variable
  // existe déjà dans la sorte de BDD. Si oui elle va récupérer la valeur associée.
  // sinon elle va utiliser la valeur par défaut (false)
  const [hasClicked, setHasClicked] = useState(false);

  //
  const handleClick = () => {
    // j'utilise la fonction que useState me fournit
    // pour modifier la valeur de la variable hasClicked
    // A chaque fois que cette fonction est appelée, mon compsant
    // est rechargée (l'affichage dans ma page est rechargé)
    setHasClicked(!hasClicked);
  };

  return (
    <div>
      {/* 
			j'affiche le paragraphe et j'ajoute un event listener.
			Au clic sur le paragraph, j'appelle la fonction handleClick
		*/}
      <p onClick={handleClick}>A combien s'élève les frais de port si on habite à Chateauroux ?</p>

      {/* si hasClicked est vrai, alors j'affiche le paragraphe */}
      {hasClicked && <p>On ne livre pas à Chateauroux, on a un minimum d'éthique</p>}
    </div>
  );
};

export default Reply;
