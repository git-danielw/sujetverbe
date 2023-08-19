/*

Subject: je(0), tu(1), il/elle(2), nous(3), vous(4), ils/elles(5)
Ending: er(0), ir(1), re(2)

*/

// Does not take care of vowels, for example [Je, attendre] should return 'J'attends' but instead it returns 'Je attends'
function sentence(subject, verb) {
    let subjects = ['Je','Tu','Il/Elle','Nous','Vous','Ils/Elles']
    verb = verb.slice(0, -2) + getEnding(subject, verb.slice(-2)); // Chop last two chars, get last two chars and get ending
    return `${subjects[subject]} ${verb}.`;
}

function getEnding(subject, end) {
    let convEnd = end=='er'?0:end=='ir'?1:2;
    let er = ['e','es','e','ons','ez','ent'];
    let ir = ['is','is','it','issons','issez','issent'];
    let re = ['s','s','','ons','ez','ent'];
    let endingList = [er, ir, re];
    return endingList[convEnd][subject];
}