// Fonction pour évaluer une addition tapée (ex: "4+4+4+")
export const evaluerCalcul = (valeurTexte) => {
  if (!valeurTexte) return 0;
  try {
    let expression = valeurTexte.toString().replace(/,/g, '.').replace(/\s/g, '');
    while (expression.endsWith('+') || expression.endsWith('-') || expression.endsWith('*') || expression.endsWith('/')) {
      expression = expression.slice(0, -1);
    }
    if (expression !== "") {
      // eslint-disable-next-line no-eval
      return eval(expression) || 0;
    }
    return 0;
  } catch (e) {
    return 0;
  }
};

// Formater les nombres pour l'affichage (ex: 1 500,50)
export const formatNombre = (nombre) => {
  // Si le nombre est undefined, null ou NaN, on affiche 0
  if (nombre === undefined || nombre === null || isNaN(nombre)) {
    return "0,00";
  }
  return Number(nombre).toLocaleString('fr-MA', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};