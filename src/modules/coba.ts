/*
    vert = 1
    gris = 2 
    orange = 2 (sauf si nombre de dés impair 1)
    jaune = -1
    bleu = nbr de dés de l'autre équipe
    rose = 3 et tous les dés de valeur faible passe à 0
*/

export const getScoreTeam = (dices: string[], nbreDicesOtherTeam?: number): number => {
    
    let score = 0;
    const nbreDices = dices.length;

    dices.forEach(dice => {
        switch (dice) {
            case "green":
                score += 1;
                break;
            case "grey":
                score += 2;
                break;
            case "orange":
                score += nbreDices % 2 === 0 ? 2 : 1;
                break;
            case "yellow":
                score -= 1;
                break;
            case "blue":
                score += nbreDicesOtherTeam || 0;
                break;
            case "rose":
                score += 3;
                break;
            default:
                break;
        }
    });

    return score;
};